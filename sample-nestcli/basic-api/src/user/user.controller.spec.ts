import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  describe('getUsers', () =>{
    it('should be defined "array: erica, rodrigo, lola"', () => {
      expect(controller.getUsers()).toBe(['erica','rodrigo','lola']);
    });
  });
  
});
