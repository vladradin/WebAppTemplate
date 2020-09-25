
export function AllowAnonymous() {
    return (target: Object, prop?: string, propertyDesc?: PropertyDescriptor) => {

    }
}
export function Authorize() {
    return (target: Object, prop?: string, propertyDesc?: PropertyDescriptor) => {

    }
}

enum Scope {
    anonymous = 1000,
}