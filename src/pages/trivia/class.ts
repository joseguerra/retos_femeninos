/**
 * Created by jagr_ on 1/2/2017.
 */
export class trivia{
  constructor(
    public token: string,
    public time: number,
    public sponsor_id: number,
    public place_id: number,
    public trivia_id: number,
    public question: any []
    ) {

  }
}
