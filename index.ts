import { interval } from 'rxjs';
import { concatMap, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';

//emit value every 2s
const obs1 = interval(2000).pipe(take(3));
//emit value every 1.2s
const obs2 = interval(1200).pipe(take(3));

const example = obs1.pipe(
  concatMap((value1) =>
    obs2.pipe(
      tap((value2) => console.log('Value1: ', value1, 'Value2', value2)),
      map((value2) => value1 * value2)
    )
  )
);

const subscribe = example.subscribe((val) => console.log(val));
