
export default class {
  /**
   * Extend the context store by adding shared properties
   * 
   * @param prop
   * @param value
   */
  set (prop: string, value: any): void;

  /**
   * Extend the context store by adding per instance property
   * 
   * @param prop
   * @param fn
   */
  bind (prop: string, fn: (ctx: any) => any): void;

  /**
   * Get a value from the context store
   * 
   * @param prop
   */
  get (prop: string): any;

  /**
   * Check if the prop is defined in the context store
   * 
   * @param prop
   */
  has (prop: string): boolean;

  /**
   * Create a new context store
   */
  create (): any;
}
