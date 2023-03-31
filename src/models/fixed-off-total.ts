import { Discount } from '../models/discountModel';

export class FixedOffTotal extends Discount {
  public calculate(): number
  {
   return 0
  }
}