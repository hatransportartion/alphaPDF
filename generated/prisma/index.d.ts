
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>
/**
 * Model PDFTemplate
 * 
 */
export type PDFTemplate = $Result.DefaultSelection<Prisma.$PDFTemplatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttachmentType: {
  logo: 'logo',
  image: 'image',
  pdf: 'pdf',
  other: 'other'
};

export type AttachmentType = (typeof AttachmentType)[keyof typeof AttachmentType]


export const StorageType: {
  BASE64: 'BASE64',
  URL: 'URL'
};

export type StorageType = (typeof StorageType)[keyof typeof StorageType]

}

export type AttachmentType = $Enums.AttachmentType

export const AttachmentType: typeof $Enums.AttachmentType

export type StorageType = $Enums.StorageType

export const StorageType: typeof $Enums.StorageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Attachments
 * const attachments = await prisma.attachment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Attachments
   * const attachments = await prisma.attachment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pDFTemplate`: Exposes CRUD operations for the **PDFTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PDFTemplates
    * const pDFTemplates = await prisma.pDFTemplate.findMany()
    * ```
    */
  get pDFTemplate(): Prisma.PDFTemplateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.0
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Attachment: 'Attachment',
    PDFTemplate: 'PDFTemplate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "attachment" | "pDFTemplate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
      PDFTemplate: {
        payload: Prisma.$PDFTemplatePayload<ExtArgs>
        fields: Prisma.PDFTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PDFTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PDFTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFTemplatePayload>
          }
          findFirst: {
            args: Prisma.PDFTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PDFTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFTemplatePayload>
          }
          findMany: {
            args: Prisma.PDFTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFTemplatePayload>[]
          }
          create: {
            args: Prisma.PDFTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFTemplatePayload>
          }
          createMany: {
            args: Prisma.PDFTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PDFTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFTemplatePayload>
          }
          update: {
            args: Prisma.PDFTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFTemplatePayload>
          }
          deleteMany: {
            args: Prisma.PDFTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PDFTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PDFTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PDFTemplatePayload>
          }
          aggregate: {
            args: Prisma.PDFTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePDFTemplate>
          }
          groupBy: {
            args: Prisma.PDFTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PDFTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PDFTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<PDFTemplateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    attachment?: AttachmentOmit
    pDFTemplate?: PDFTemplateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PDFTemplateCountOutputType
   */

  export type PDFTemplateCountOutputType = {
    attachments: number
  }

  export type PDFTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | PDFTemplateCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * PDFTemplateCountOutputType without action
   */
  export type PDFTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDFTemplateCountOutputType
     */
    select?: PDFTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PDFTemplateCountOutputType without action
   */
  export type PDFTemplateCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentAvgAggregateOutputType = {
    id: number | null
  }

  export type AttachmentSumAggregateOutputType = {
    id: number | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: number | null
    templateId: string | null
    type: $Enums.AttachmentType | null
    fileName: string | null
    fileType: string | null
    storageType: $Enums.StorageType | null
    fileData: string | null
    fileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: number | null
    templateId: string | null
    type: $Enums.AttachmentType | null
    fileName: string | null
    fileType: string | null
    storageType: $Enums.StorageType | null
    fileData: string | null
    fileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    templateId: number
    type: number
    fileName: number
    fileType: number
    storageType: number
    fileData: number
    fileUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttachmentAvgAggregateInputType = {
    id?: true
  }

  export type AttachmentSumAggregateInputType = {
    id?: true
  }

  export type AttachmentMinAggregateInputType = {
    id?: true
    templateId?: true
    type?: true
    fileName?: true
    fileType?: true
    storageType?: true
    fileData?: true
    fileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    templateId?: true
    type?: true
    fileName?: true
    fileType?: true
    storageType?: true
    fileData?: true
    fileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    templateId?: true
    type?: true
    fileName?: true
    fileType?: true
    storageType?: true
    fileData?: true
    fileUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _avg?: AttachmentAvgAggregateInputType
    _sum?: AttachmentSumAggregateInputType
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: number
    templateId: string
    type: $Enums.AttachmentType
    fileName: string
    fileType: string | null
    storageType: $Enums.StorageType
    fileData: string | null
    fileUrl: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    type?: boolean
    fileName?: boolean
    fileType?: boolean
    storageType?: boolean
    fileData?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | PDFTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>



  export type AttachmentSelectScalar = {
    id?: boolean
    templateId?: boolean
    type?: boolean
    fileName?: boolean
    fileType?: boolean
    storageType?: boolean
    fileData?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateId" | "type" | "fileName" | "fileType" | "storageType" | "fileData" | "fileUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["attachment"]>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | PDFTemplateDefaultArgs<ExtArgs>
  }

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      template: Prisma.$PDFTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      templateId: string
      type: $Enums.AttachmentType
      fileName: string
      fileType: string | null
      storageType: $Enums.StorageType
      fileData: string | null
      fileUrl: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends PDFTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PDFTemplateDefaultArgs<ExtArgs>>): Prisma__PDFTemplateClient<$Result.GetResult<Prisma.$PDFTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'Int'>
    readonly templateId: FieldRef<"Attachment", 'String'>
    readonly type: FieldRef<"Attachment", 'AttachmentType'>
    readonly fileName: FieldRef<"Attachment", 'String'>
    readonly fileType: FieldRef<"Attachment", 'String'>
    readonly storageType: FieldRef<"Attachment", 'StorageType'>
    readonly fileData: FieldRef<"Attachment", 'String'>
    readonly fileUrl: FieldRef<"Attachment", 'String'>
    readonly createdAt: FieldRef<"Attachment", 'DateTime'>
    readonly updatedAt: FieldRef<"Attachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
  }


  /**
   * Model PDFTemplate
   */

  export type AggregatePDFTemplate = {
    _count: PDFTemplateCountAggregateOutputType | null
    _avg: PDFTemplateAvgAggregateOutputType | null
    _sum: PDFTemplateSumAggregateOutputType | null
    _min: PDFTemplateMinAggregateOutputType | null
    _max: PDFTemplateMaxAggregateOutputType | null
  }

  export type PDFTemplateAvgAggregateOutputType = {
    id: number | null
  }

  export type PDFTemplateSumAggregateOutputType = {
    id: number | null
  }

  export type PDFTemplateMinAggregateOutputType = {
    id: number | null
    templateName: string | null
    templateId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PDFTemplateMaxAggregateOutputType = {
    id: number | null
    templateName: string | null
    templateId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PDFTemplateCountAggregateOutputType = {
    id: number
    templateName: number
    templateId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PDFTemplateAvgAggregateInputType = {
    id?: true
  }

  export type PDFTemplateSumAggregateInputType = {
    id?: true
  }

  export type PDFTemplateMinAggregateInputType = {
    id?: true
    templateName?: true
    templateId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PDFTemplateMaxAggregateInputType = {
    id?: true
    templateName?: true
    templateId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PDFTemplateCountAggregateInputType = {
    id?: true
    templateName?: true
    templateId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PDFTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PDFTemplate to aggregate.
     */
    where?: PDFTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PDFTemplates to fetch.
     */
    orderBy?: PDFTemplateOrderByWithRelationInput | PDFTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PDFTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PDFTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PDFTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PDFTemplates
    **/
    _count?: true | PDFTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PDFTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PDFTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PDFTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PDFTemplateMaxAggregateInputType
  }

  export type GetPDFTemplateAggregateType<T extends PDFTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregatePDFTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePDFTemplate[P]>
      : GetScalarType<T[P], AggregatePDFTemplate[P]>
  }




  export type PDFTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PDFTemplateWhereInput
    orderBy?: PDFTemplateOrderByWithAggregationInput | PDFTemplateOrderByWithAggregationInput[]
    by: PDFTemplateScalarFieldEnum[] | PDFTemplateScalarFieldEnum
    having?: PDFTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PDFTemplateCountAggregateInputType | true
    _avg?: PDFTemplateAvgAggregateInputType
    _sum?: PDFTemplateSumAggregateInputType
    _min?: PDFTemplateMinAggregateInputType
    _max?: PDFTemplateMaxAggregateInputType
  }

  export type PDFTemplateGroupByOutputType = {
    id: number
    templateName: string
    templateId: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: PDFTemplateCountAggregateOutputType | null
    _avg: PDFTemplateAvgAggregateOutputType | null
    _sum: PDFTemplateSumAggregateOutputType | null
    _min: PDFTemplateMinAggregateOutputType | null
    _max: PDFTemplateMaxAggregateOutputType | null
  }

  type GetPDFTemplateGroupByPayload<T extends PDFTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PDFTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PDFTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PDFTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], PDFTemplateGroupByOutputType[P]>
        }
      >
    >


  export type PDFTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateName?: boolean
    templateId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attachments?: boolean | PDFTemplate$attachmentsArgs<ExtArgs>
    _count?: boolean | PDFTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pDFTemplate"]>



  export type PDFTemplateSelectScalar = {
    id?: boolean
    templateName?: boolean
    templateId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PDFTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateName" | "templateId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["pDFTemplate"]>
  export type PDFTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | PDFTemplate$attachmentsArgs<ExtArgs>
    _count?: boolean | PDFTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PDFTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PDFTemplate"
    objects: {
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      templateName: string
      templateId: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pDFTemplate"]>
    composites: {}
  }

  type PDFTemplateGetPayload<S extends boolean | null | undefined | PDFTemplateDefaultArgs> = $Result.GetResult<Prisma.$PDFTemplatePayload, S>

  type PDFTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PDFTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PDFTemplateCountAggregateInputType | true
    }

  export interface PDFTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PDFTemplate'], meta: { name: 'PDFTemplate' } }
    /**
     * Find zero or one PDFTemplate that matches the filter.
     * @param {PDFTemplateFindUniqueArgs} args - Arguments to find a PDFTemplate
     * @example
     * // Get one PDFTemplate
     * const pDFTemplate = await prisma.pDFTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PDFTemplateFindUniqueArgs>(args: SelectSubset<T, PDFTemplateFindUniqueArgs<ExtArgs>>): Prisma__PDFTemplateClient<$Result.GetResult<Prisma.$PDFTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PDFTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PDFTemplateFindUniqueOrThrowArgs} args - Arguments to find a PDFTemplate
     * @example
     * // Get one PDFTemplate
     * const pDFTemplate = await prisma.pDFTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PDFTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, PDFTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PDFTemplateClient<$Result.GetResult<Prisma.$PDFTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PDFTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFTemplateFindFirstArgs} args - Arguments to find a PDFTemplate
     * @example
     * // Get one PDFTemplate
     * const pDFTemplate = await prisma.pDFTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PDFTemplateFindFirstArgs>(args?: SelectSubset<T, PDFTemplateFindFirstArgs<ExtArgs>>): Prisma__PDFTemplateClient<$Result.GetResult<Prisma.$PDFTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PDFTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFTemplateFindFirstOrThrowArgs} args - Arguments to find a PDFTemplate
     * @example
     * // Get one PDFTemplate
     * const pDFTemplate = await prisma.pDFTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PDFTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, PDFTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PDFTemplateClient<$Result.GetResult<Prisma.$PDFTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PDFTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PDFTemplates
     * const pDFTemplates = await prisma.pDFTemplate.findMany()
     * 
     * // Get first 10 PDFTemplates
     * const pDFTemplates = await prisma.pDFTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pDFTemplateWithIdOnly = await prisma.pDFTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PDFTemplateFindManyArgs>(args?: SelectSubset<T, PDFTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PDFTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PDFTemplate.
     * @param {PDFTemplateCreateArgs} args - Arguments to create a PDFTemplate.
     * @example
     * // Create one PDFTemplate
     * const PDFTemplate = await prisma.pDFTemplate.create({
     *   data: {
     *     // ... data to create a PDFTemplate
     *   }
     * })
     * 
     */
    create<T extends PDFTemplateCreateArgs>(args: SelectSubset<T, PDFTemplateCreateArgs<ExtArgs>>): Prisma__PDFTemplateClient<$Result.GetResult<Prisma.$PDFTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PDFTemplates.
     * @param {PDFTemplateCreateManyArgs} args - Arguments to create many PDFTemplates.
     * @example
     * // Create many PDFTemplates
     * const pDFTemplate = await prisma.pDFTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PDFTemplateCreateManyArgs>(args?: SelectSubset<T, PDFTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PDFTemplate.
     * @param {PDFTemplateDeleteArgs} args - Arguments to delete one PDFTemplate.
     * @example
     * // Delete one PDFTemplate
     * const PDFTemplate = await prisma.pDFTemplate.delete({
     *   where: {
     *     // ... filter to delete one PDFTemplate
     *   }
     * })
     * 
     */
    delete<T extends PDFTemplateDeleteArgs>(args: SelectSubset<T, PDFTemplateDeleteArgs<ExtArgs>>): Prisma__PDFTemplateClient<$Result.GetResult<Prisma.$PDFTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PDFTemplate.
     * @param {PDFTemplateUpdateArgs} args - Arguments to update one PDFTemplate.
     * @example
     * // Update one PDFTemplate
     * const pDFTemplate = await prisma.pDFTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PDFTemplateUpdateArgs>(args: SelectSubset<T, PDFTemplateUpdateArgs<ExtArgs>>): Prisma__PDFTemplateClient<$Result.GetResult<Prisma.$PDFTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PDFTemplates.
     * @param {PDFTemplateDeleteManyArgs} args - Arguments to filter PDFTemplates to delete.
     * @example
     * // Delete a few PDFTemplates
     * const { count } = await prisma.pDFTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PDFTemplateDeleteManyArgs>(args?: SelectSubset<T, PDFTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PDFTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PDFTemplates
     * const pDFTemplate = await prisma.pDFTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PDFTemplateUpdateManyArgs>(args: SelectSubset<T, PDFTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PDFTemplate.
     * @param {PDFTemplateUpsertArgs} args - Arguments to update or create a PDFTemplate.
     * @example
     * // Update or create a PDFTemplate
     * const pDFTemplate = await prisma.pDFTemplate.upsert({
     *   create: {
     *     // ... data to create a PDFTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PDFTemplate we want to update
     *   }
     * })
     */
    upsert<T extends PDFTemplateUpsertArgs>(args: SelectSubset<T, PDFTemplateUpsertArgs<ExtArgs>>): Prisma__PDFTemplateClient<$Result.GetResult<Prisma.$PDFTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PDFTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFTemplateCountArgs} args - Arguments to filter PDFTemplates to count.
     * @example
     * // Count the number of PDFTemplates
     * const count = await prisma.pDFTemplate.count({
     *   where: {
     *     // ... the filter for the PDFTemplates we want to count
     *   }
     * })
    **/
    count<T extends PDFTemplateCountArgs>(
      args?: Subset<T, PDFTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PDFTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PDFTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PDFTemplateAggregateArgs>(args: Subset<T, PDFTemplateAggregateArgs>): Prisma.PrismaPromise<GetPDFTemplateAggregateType<T>>

    /**
     * Group by PDFTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PDFTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PDFTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PDFTemplateGroupByArgs['orderBy'] }
        : { orderBy?: PDFTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PDFTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPDFTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PDFTemplate model
   */
  readonly fields: PDFTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PDFTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PDFTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attachments<T extends PDFTemplate$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, PDFTemplate$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PDFTemplate model
   */
  interface PDFTemplateFieldRefs {
    readonly id: FieldRef<"PDFTemplate", 'Int'>
    readonly templateName: FieldRef<"PDFTemplate", 'String'>
    readonly templateId: FieldRef<"PDFTemplate", 'String'>
    readonly content: FieldRef<"PDFTemplate", 'String'>
    readonly createdAt: FieldRef<"PDFTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"PDFTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PDFTemplate findUnique
   */
  export type PDFTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDFTemplate
     */
    select?: PDFTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDFTemplate
     */
    omit?: PDFTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PDFTemplate to fetch.
     */
    where: PDFTemplateWhereUniqueInput
  }

  /**
   * PDFTemplate findUniqueOrThrow
   */
  export type PDFTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDFTemplate
     */
    select?: PDFTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDFTemplate
     */
    omit?: PDFTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PDFTemplate to fetch.
     */
    where: PDFTemplateWhereUniqueInput
  }

  /**
   * PDFTemplate findFirst
   */
  export type PDFTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDFTemplate
     */
    select?: PDFTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDFTemplate
     */
    omit?: PDFTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PDFTemplate to fetch.
     */
    where?: PDFTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PDFTemplates to fetch.
     */
    orderBy?: PDFTemplateOrderByWithRelationInput | PDFTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PDFTemplates.
     */
    cursor?: PDFTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PDFTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PDFTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PDFTemplates.
     */
    distinct?: PDFTemplateScalarFieldEnum | PDFTemplateScalarFieldEnum[]
  }

  /**
   * PDFTemplate findFirstOrThrow
   */
  export type PDFTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDFTemplate
     */
    select?: PDFTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDFTemplate
     */
    omit?: PDFTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PDFTemplate to fetch.
     */
    where?: PDFTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PDFTemplates to fetch.
     */
    orderBy?: PDFTemplateOrderByWithRelationInput | PDFTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PDFTemplates.
     */
    cursor?: PDFTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PDFTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PDFTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PDFTemplates.
     */
    distinct?: PDFTemplateScalarFieldEnum | PDFTemplateScalarFieldEnum[]
  }

  /**
   * PDFTemplate findMany
   */
  export type PDFTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDFTemplate
     */
    select?: PDFTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDFTemplate
     */
    omit?: PDFTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PDFTemplates to fetch.
     */
    where?: PDFTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PDFTemplates to fetch.
     */
    orderBy?: PDFTemplateOrderByWithRelationInput | PDFTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PDFTemplates.
     */
    cursor?: PDFTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PDFTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PDFTemplates.
     */
    skip?: number
    distinct?: PDFTemplateScalarFieldEnum | PDFTemplateScalarFieldEnum[]
  }

  /**
   * PDFTemplate create
   */
  export type PDFTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDFTemplate
     */
    select?: PDFTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDFTemplate
     */
    omit?: PDFTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a PDFTemplate.
     */
    data: XOR<PDFTemplateCreateInput, PDFTemplateUncheckedCreateInput>
  }

  /**
   * PDFTemplate createMany
   */
  export type PDFTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PDFTemplates.
     */
    data: PDFTemplateCreateManyInput | PDFTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PDFTemplate update
   */
  export type PDFTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDFTemplate
     */
    select?: PDFTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDFTemplate
     */
    omit?: PDFTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a PDFTemplate.
     */
    data: XOR<PDFTemplateUpdateInput, PDFTemplateUncheckedUpdateInput>
    /**
     * Choose, which PDFTemplate to update.
     */
    where: PDFTemplateWhereUniqueInput
  }

  /**
   * PDFTemplate updateMany
   */
  export type PDFTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PDFTemplates.
     */
    data: XOR<PDFTemplateUpdateManyMutationInput, PDFTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PDFTemplates to update
     */
    where?: PDFTemplateWhereInput
    /**
     * Limit how many PDFTemplates to update.
     */
    limit?: number
  }

  /**
   * PDFTemplate upsert
   */
  export type PDFTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDFTemplate
     */
    select?: PDFTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDFTemplate
     */
    omit?: PDFTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the PDFTemplate to update in case it exists.
     */
    where: PDFTemplateWhereUniqueInput
    /**
     * In case the PDFTemplate found by the `where` argument doesn't exist, create a new PDFTemplate with this data.
     */
    create: XOR<PDFTemplateCreateInput, PDFTemplateUncheckedCreateInput>
    /**
     * In case the PDFTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PDFTemplateUpdateInput, PDFTemplateUncheckedUpdateInput>
  }

  /**
   * PDFTemplate delete
   */
  export type PDFTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDFTemplate
     */
    select?: PDFTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDFTemplate
     */
    omit?: PDFTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFTemplateInclude<ExtArgs> | null
    /**
     * Filter which PDFTemplate to delete.
     */
    where: PDFTemplateWhereUniqueInput
  }

  /**
   * PDFTemplate deleteMany
   */
  export type PDFTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PDFTemplates to delete
     */
    where?: PDFTemplateWhereInput
    /**
     * Limit how many PDFTemplates to delete.
     */
    limit?: number
  }

  /**
   * PDFTemplate.attachments
   */
  export type PDFTemplate$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * PDFTemplate without action
   */
  export type PDFTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PDFTemplate
     */
    select?: PDFTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PDFTemplate
     */
    omit?: PDFTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PDFTemplateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    type: 'type',
    fileName: 'fileName',
    fileType: 'fileType',
    storageType: 'storageType',
    fileData: 'fileData',
    fileUrl: 'fileUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const PDFTemplateScalarFieldEnum: {
    id: 'id',
    templateName: 'templateName',
    templateId: 'templateId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PDFTemplateScalarFieldEnum = (typeof PDFTemplateScalarFieldEnum)[keyof typeof PDFTemplateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AttachmentOrderByRelevanceFieldEnum: {
    templateId: 'templateId',
    fileName: 'fileName',
    fileType: 'fileType',
    fileData: 'fileData',
    fileUrl: 'fileUrl'
  };

  export type AttachmentOrderByRelevanceFieldEnum = (typeof AttachmentOrderByRelevanceFieldEnum)[keyof typeof AttachmentOrderByRelevanceFieldEnum]


  export const PDFTemplateOrderByRelevanceFieldEnum: {
    templateName: 'templateName',
    templateId: 'templateId',
    content: 'content'
  };

  export type PDFTemplateOrderByRelevanceFieldEnum = (typeof PDFTemplateOrderByRelevanceFieldEnum)[keyof typeof PDFTemplateOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'AttachmentType'
   */
  export type EnumAttachmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttachmentType'>
    


  /**
   * Reference to a field of type 'StorageType'
   */
  export type EnumStorageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StorageType'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: IntFilter<"Attachment"> | number
    templateId?: StringFilter<"Attachment"> | string
    type?: EnumAttachmentTypeFilter<"Attachment"> | $Enums.AttachmentType
    fileName?: StringFilter<"Attachment"> | string
    fileType?: StringNullableFilter<"Attachment"> | string | null
    storageType?: EnumStorageTypeFilter<"Attachment"> | $Enums.StorageType
    fileData?: StringNullableFilter<"Attachment"> | string | null
    fileUrl?: StringNullableFilter<"Attachment"> | string | null
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    template?: XOR<PDFTemplateScalarRelationFilter, PDFTemplateWhereInput>
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrderInput | SortOrder
    storageType?: SortOrder
    fileData?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    template?: PDFTemplateOrderByWithRelationInput
    _relevance?: AttachmentOrderByRelevanceInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    templateId?: StringFilter<"Attachment"> | string
    type?: EnumAttachmentTypeFilter<"Attachment"> | $Enums.AttachmentType
    fileName?: StringFilter<"Attachment"> | string
    fileType?: StringNullableFilter<"Attachment"> | string | null
    storageType?: EnumStorageTypeFilter<"Attachment"> | $Enums.StorageType
    fileData?: StringNullableFilter<"Attachment"> | string | null
    fileUrl?: StringNullableFilter<"Attachment"> | string | null
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    template?: XOR<PDFTemplateScalarRelationFilter, PDFTemplateWhereInput>
  }, "id">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrderInput | SortOrder
    storageType?: SortOrder
    fileData?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _avg?: AttachmentAvgOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
    _sum?: AttachmentSumOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attachment"> | number
    templateId?: StringWithAggregatesFilter<"Attachment"> | string
    type?: EnumAttachmentTypeWithAggregatesFilter<"Attachment"> | $Enums.AttachmentType
    fileName?: StringWithAggregatesFilter<"Attachment"> | string
    fileType?: StringNullableWithAggregatesFilter<"Attachment"> | string | null
    storageType?: EnumStorageTypeWithAggregatesFilter<"Attachment"> | $Enums.StorageType
    fileData?: StringNullableWithAggregatesFilter<"Attachment"> | string | null
    fileUrl?: StringNullableWithAggregatesFilter<"Attachment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Attachment"> | Date | string | null
  }

  export type PDFTemplateWhereInput = {
    AND?: PDFTemplateWhereInput | PDFTemplateWhereInput[]
    OR?: PDFTemplateWhereInput[]
    NOT?: PDFTemplateWhereInput | PDFTemplateWhereInput[]
    id?: IntFilter<"PDFTemplate"> | number
    templateName?: StringFilter<"PDFTemplate"> | string
    templateId?: StringFilter<"PDFTemplate"> | string
    content?: StringFilter<"PDFTemplate"> | string
    createdAt?: DateTimeFilter<"PDFTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PDFTemplate"> | Date | string
    attachments?: AttachmentListRelationFilter
  }

  export type PDFTemplateOrderByWithRelationInput = {
    id?: SortOrder
    templateName?: SortOrder
    templateId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attachments?: AttachmentOrderByRelationAggregateInput
    _relevance?: PDFTemplateOrderByRelevanceInput
  }

  export type PDFTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    templateId?: string
    AND?: PDFTemplateWhereInput | PDFTemplateWhereInput[]
    OR?: PDFTemplateWhereInput[]
    NOT?: PDFTemplateWhereInput | PDFTemplateWhereInput[]
    templateName?: StringFilter<"PDFTemplate"> | string
    content?: StringFilter<"PDFTemplate"> | string
    createdAt?: DateTimeFilter<"PDFTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PDFTemplate"> | Date | string
    attachments?: AttachmentListRelationFilter
  }, "id" | "templateId">

  export type PDFTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    templateName?: SortOrder
    templateId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PDFTemplateCountOrderByAggregateInput
    _avg?: PDFTemplateAvgOrderByAggregateInput
    _max?: PDFTemplateMaxOrderByAggregateInput
    _min?: PDFTemplateMinOrderByAggregateInput
    _sum?: PDFTemplateSumOrderByAggregateInput
  }

  export type PDFTemplateScalarWhereWithAggregatesInput = {
    AND?: PDFTemplateScalarWhereWithAggregatesInput | PDFTemplateScalarWhereWithAggregatesInput[]
    OR?: PDFTemplateScalarWhereWithAggregatesInput[]
    NOT?: PDFTemplateScalarWhereWithAggregatesInput | PDFTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PDFTemplate"> | number
    templateName?: StringWithAggregatesFilter<"PDFTemplate"> | string
    templateId?: StringWithAggregatesFilter<"PDFTemplate"> | string
    content?: StringWithAggregatesFilter<"PDFTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PDFTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PDFTemplate"> | Date | string
  }

  export type AttachmentCreateInput = {
    type: $Enums.AttachmentType
    fileName: string
    fileType?: string | null
    storageType?: $Enums.StorageType
    fileData?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    template: PDFTemplateCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: number
    templateId: string
    type: $Enums.AttachmentType
    fileName: string
    fileType?: string | null
    storageType?: $Enums.StorageType
    fileData?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AttachmentUpdateInput = {
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    template?: PDFTemplateUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: StringFieldUpdateOperationsInput | string
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentCreateManyInput = {
    id?: number
    templateId: string
    type: $Enums.AttachmentType
    fileName: string
    fileType?: string | null
    storageType?: $Enums.StorageType
    fileData?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AttachmentUpdateManyMutationInput = {
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: StringFieldUpdateOperationsInput | string
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PDFTemplateCreateInput = {
    templateName: string
    templateId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AttachmentCreateNestedManyWithoutTemplateInput
  }

  export type PDFTemplateUncheckedCreateInput = {
    id?: number
    templateName: string
    templateId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type PDFTemplateUpdateInput = {
    templateName?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUpdateManyWithoutTemplateNestedInput
  }

  export type PDFTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateName?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type PDFTemplateCreateManyInput = {
    id?: number
    templateName: string
    templateId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PDFTemplateUpdateManyMutationInput = {
    templateName?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PDFTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateName?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAttachmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentType | EnumAttachmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttachmentType[]
    notIn?: $Enums.AttachmentType[]
    not?: NestedEnumAttachmentTypeFilter<$PrismaModel> | $Enums.AttachmentType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumStorageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageType | EnumStorageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StorageType[]
    notIn?: $Enums.StorageType[]
    not?: NestedEnumStorageTypeFilter<$PrismaModel> | $Enums.StorageType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PDFTemplateScalarRelationFilter = {
    is?: PDFTemplateWhereInput
    isNot?: PDFTemplateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttachmentOrderByRelevanceInput = {
    fields: AttachmentOrderByRelevanceFieldEnum | AttachmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    storageType?: SortOrder
    fileData?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    storageType?: SortOrder
    fileData?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    storageType?: SortOrder
    fileData?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumAttachmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentType | EnumAttachmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttachmentType[]
    notIn?: $Enums.AttachmentType[]
    not?: NestedEnumAttachmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttachmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttachmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAttachmentTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumStorageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageType | EnumStorageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StorageType[]
    notIn?: $Enums.StorageType[]
    not?: NestedEnumStorageTypeWithAggregatesFilter<$PrismaModel> | $Enums.StorageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageTypeFilter<$PrismaModel>
    _max?: NestedEnumStorageTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PDFTemplateOrderByRelevanceInput = {
    fields: PDFTemplateOrderByRelevanceFieldEnum | PDFTemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PDFTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    templateName?: SortOrder
    templateId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PDFTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PDFTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    templateName?: SortOrder
    templateId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PDFTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    templateName?: SortOrder
    templateId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PDFTemplateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PDFTemplateCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<PDFTemplateCreateWithoutAttachmentsInput, PDFTemplateUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: PDFTemplateCreateOrConnectWithoutAttachmentsInput
    connect?: PDFTemplateWhereUniqueInput
  }

  export type EnumAttachmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AttachmentType
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStorageTypeFieldUpdateOperationsInput = {
    set?: $Enums.StorageType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PDFTemplateUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<PDFTemplateCreateWithoutAttachmentsInput, PDFTemplateUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: PDFTemplateCreateOrConnectWithoutAttachmentsInput
    upsert?: PDFTemplateUpsertWithoutAttachmentsInput
    connect?: PDFTemplateWhereUniqueInput
    update?: XOR<XOR<PDFTemplateUpdateToOneWithWhereWithoutAttachmentsInput, PDFTemplateUpdateWithoutAttachmentsInput>, PDFTemplateUncheckedUpdateWithoutAttachmentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AttachmentCreateNestedManyWithoutTemplateInput = {
    create?: XOR<AttachmentCreateWithoutTemplateInput, AttachmentUncheckedCreateWithoutTemplateInput> | AttachmentCreateWithoutTemplateInput[] | AttachmentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTemplateInput | AttachmentCreateOrConnectWithoutTemplateInput[]
    createMany?: AttachmentCreateManyTemplateInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<AttachmentCreateWithoutTemplateInput, AttachmentUncheckedCreateWithoutTemplateInput> | AttachmentCreateWithoutTemplateInput[] | AttachmentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTemplateInput | AttachmentCreateOrConnectWithoutTemplateInput[]
    createMany?: AttachmentCreateManyTemplateInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type AttachmentUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<AttachmentCreateWithoutTemplateInput, AttachmentUncheckedCreateWithoutTemplateInput> | AttachmentCreateWithoutTemplateInput[] | AttachmentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTemplateInput | AttachmentCreateOrConnectWithoutTemplateInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTemplateInput | AttachmentUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: AttachmentCreateManyTemplateInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTemplateInput | AttachmentUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTemplateInput | AttachmentUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<AttachmentCreateWithoutTemplateInput, AttachmentUncheckedCreateWithoutTemplateInput> | AttachmentCreateWithoutTemplateInput[] | AttachmentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTemplateInput | AttachmentCreateOrConnectWithoutTemplateInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTemplateInput | AttachmentUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: AttachmentCreateManyTemplateInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTemplateInput | AttachmentUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTemplateInput | AttachmentUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAttachmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentType | EnumAttachmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttachmentType[]
    notIn?: $Enums.AttachmentType[]
    not?: NestedEnumAttachmentTypeFilter<$PrismaModel> | $Enums.AttachmentType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStorageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageType | EnumStorageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StorageType[]
    notIn?: $Enums.StorageType[]
    not?: NestedEnumStorageTypeFilter<$PrismaModel> | $Enums.StorageType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumAttachmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentType | EnumAttachmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttachmentType[]
    notIn?: $Enums.AttachmentType[]
    not?: NestedEnumAttachmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttachmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttachmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAttachmentTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStorageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageType | EnumStorageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StorageType[]
    notIn?: $Enums.StorageType[]
    not?: NestedEnumStorageTypeWithAggregatesFilter<$PrismaModel> | $Enums.StorageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageTypeFilter<$PrismaModel>
    _max?: NestedEnumStorageTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PDFTemplateCreateWithoutAttachmentsInput = {
    templateName: string
    templateId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PDFTemplateUncheckedCreateWithoutAttachmentsInput = {
    id?: number
    templateName: string
    templateId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PDFTemplateCreateOrConnectWithoutAttachmentsInput = {
    where: PDFTemplateWhereUniqueInput
    create: XOR<PDFTemplateCreateWithoutAttachmentsInput, PDFTemplateUncheckedCreateWithoutAttachmentsInput>
  }

  export type PDFTemplateUpsertWithoutAttachmentsInput = {
    update: XOR<PDFTemplateUpdateWithoutAttachmentsInput, PDFTemplateUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<PDFTemplateCreateWithoutAttachmentsInput, PDFTemplateUncheckedCreateWithoutAttachmentsInput>
    where?: PDFTemplateWhereInput
  }

  export type PDFTemplateUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: PDFTemplateWhereInput
    data: XOR<PDFTemplateUpdateWithoutAttachmentsInput, PDFTemplateUncheckedUpdateWithoutAttachmentsInput>
  }

  export type PDFTemplateUpdateWithoutAttachmentsInput = {
    templateName?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PDFTemplateUncheckedUpdateWithoutAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateName?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateWithoutTemplateInput = {
    type: $Enums.AttachmentType
    fileName: string
    fileType?: string | null
    storageType?: $Enums.StorageType
    fileData?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AttachmentUncheckedCreateWithoutTemplateInput = {
    id?: number
    type: $Enums.AttachmentType
    fileName: string
    fileType?: string | null
    storageType?: $Enums.StorageType
    fileData?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AttachmentCreateOrConnectWithoutTemplateInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutTemplateInput, AttachmentUncheckedCreateWithoutTemplateInput>
  }

  export type AttachmentCreateManyTemplateInputEnvelope = {
    data: AttachmentCreateManyTemplateInput | AttachmentCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentUpsertWithWhereUniqueWithoutTemplateInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutTemplateInput, AttachmentUncheckedUpdateWithoutTemplateInput>
    create: XOR<AttachmentCreateWithoutTemplateInput, AttachmentUncheckedCreateWithoutTemplateInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutTemplateInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutTemplateInput, AttachmentUncheckedUpdateWithoutTemplateInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutTemplateInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutTemplateInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: IntFilter<"Attachment"> | number
    templateId?: StringFilter<"Attachment"> | string
    type?: EnumAttachmentTypeFilter<"Attachment"> | $Enums.AttachmentType
    fileName?: StringFilter<"Attachment"> | string
    fileType?: StringNullableFilter<"Attachment"> | string | null
    storageType?: EnumStorageTypeFilter<"Attachment"> | $Enums.StorageType
    fileData?: StringNullableFilter<"Attachment"> | string | null
    fileUrl?: StringNullableFilter<"Attachment"> | string | null
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null
  }

  export type AttachmentCreateManyTemplateInput = {
    id?: number
    type: $Enums.AttachmentType
    fileName: string
    fileType?: string | null
    storageType?: $Enums.StorageType
    fileData?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AttachmentUpdateWithoutTemplateInput = {
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentUncheckedUpdateManyWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    fileData?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}