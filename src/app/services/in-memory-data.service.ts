/**
 * Created by ING on 04-Sep-17.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 0 , name: 'SubZero' , superpower: 'Nula kao id'},
      {id: 12, name: 'Mladja', superpower : 'Uzgajanje enormnih krastavaca.'},
      {id: 13, name: 'Bane' , superpower : 'Instant humor'},
      {id: 14, name: 'Nemanja', superpower : 'Trpi nas lajk a boss!'},
      {id: 15, name: 'Dusan', superpower : '24 inča'},
      {id: 16, name: 'Zile' , superpower : 'potrosan mu superpower.'},
      {id: 17, name: 'Kostic', superpower : 'Sve je ... ako si dovoljno hrabar'},
      {id: 19, name: 'Jovana', superpower : 'Falusoid vision.'},
      {id: 20, name: 'Stojke', superpower : 'candytheft.'}
    ];
    return {heroes};
  }
}
