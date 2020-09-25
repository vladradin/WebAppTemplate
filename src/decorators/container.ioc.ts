export function Injectable(): ClassDecorator {
    return null;
}

export class Container {
    parent: Container;

    public createChild(): Container {
        throw new Error();
    }
    public addSingleton() { }
    public addTransient() { }
    public addScoped() { }
}