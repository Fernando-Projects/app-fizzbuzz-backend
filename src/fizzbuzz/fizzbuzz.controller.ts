import { Controller, Get, Param } from '@nestjs/common';
import { FizzbuzzService } from './fizzbuzz.service';

@Controller('fizzbuzz')
export class FizzbuzzController {
  constructor(private readonly fizzbuzzService: FizzbuzzService) {}

  //test
  @Get(':number')
  fizzbuzz(@Param('number') number): any {
    return this.fizzbuzzService.fizzbuzz(number);
  }
}
