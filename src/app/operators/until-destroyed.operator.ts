import { MonoTypeOperatorFunction, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export function untilDestroyed<T>(componentInstance: any): MonoTypeOperatorFunction<T> {
    const originalDestroyFunction: Function = componentInstance.ngOnDestroy;

    // The AOT compiler checks the existence of the ngOnDestroy function before compilation
    // If it is not implemented, angular will not call it, so we have to ensure that it is there
    if (typeof originalDestroyFunction !== 'function') {
        console.error(`${componentInstance.constructor.name} is using untilDestroyed operator, \
            which requires the implementation of the ngOnDestroy method.`);
    }

    componentInstance._wrDestroy$ = new Subject<void>();
    componentInstance.ngOnDestroy = (...args) => {
        originalDestroyFunction.apply(componentInstance, args);

        componentInstance._wrDestroy$.next();
        componentInstance._wrDestroy$.complete();
    };

    return source$ => source$.pipe(takeUntil(componentInstance._wrDestroy$));
}
