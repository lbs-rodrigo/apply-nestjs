import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { HERO_SERVICE } from './blog.constants';
import KillDragonMessage from './dragon.message';


@Controller('blog')
export class BlogController {

  constructor(@Inject(HERO_SERVICE) private readonly client: ClientKafka) {
    this.onModuloInit();
   }

  onModuloInit() {
    this.client.subscribeToResponseOf('hero.kill.dragon');
  }

  @Get()
  execute(): Observable<any> {
    const data = new KillDragonMessage();
    data.dragonId = "drg-1";
    data.heroId = "hr-1";
    
    return this.client.send<any>('hero.kill.dragon', data);;
  }

  @MessagePattern('hero.kill.dragon')
  killDragon(@Payload() message: KillDragonMessage):any {
    const realm = 'Nest';
    const heroId = message.heroId;
    const dragonId = message.dragonId;

    const items = [
      { id: 1, name: 'Mythical Sword' },
      { id: 2, name: 'Key to Dungeon' },
    ];

    return {
      headers: {
        kafka_nestRealm: realm
      },
      key: heroId,
      value: items
    }
  }
}
