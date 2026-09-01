declare module 'better-sqlite3' {
  interface Database {
    prepare(sql: string): any;
    exec(sql: string): void;
    close(): void;
    pragma(pragma: string, options?: { simple?: boolean }): any;
  }
  interface DatabaseConstructor {
    new (filename: string, options?: { readonly?: boolean; fileMustExist?: boolean; timeout?: number; verbose?: Function }): Database;
    (filename: string, options?: { readonly?: boolean; fileMustExist?: boolean; timeout?: number; verbose?: Function }): Database;
  }
  const Database: DatabaseConstructor;
  export default Database;
}
