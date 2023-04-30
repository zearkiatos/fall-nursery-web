class BaseBuilder {
  build<T>(): T {
    return Object.assign(this, {}) as T;
  }
}

export default BaseBuilder;
