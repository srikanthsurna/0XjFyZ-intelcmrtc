/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PushNotificationInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pushNotification.createMany(input as any))),

        create: procedure.input($Schema.PushNotificationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pushNotification.create(input as any))),

        deleteMany: procedure.input($Schema.PushNotificationInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pushNotification.deleteMany(input as any))),

        delete: procedure.input($Schema.PushNotificationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pushNotification.delete(input as any))),

        findFirst: procedure.input($Schema.PushNotificationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).pushNotification.findFirst(input as any))),

        findMany: procedure.input($Schema.PushNotificationInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).pushNotification.findMany(input as any))),

        findUnique: procedure.input($Schema.PushNotificationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).pushNotification.findUnique(input as any))),

        updateMany: procedure.input($Schema.PushNotificationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pushNotification.updateMany(input as any))),

        update: procedure.input($Schema.PushNotificationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).pushNotification.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PushNotificationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PushNotificationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PushNotificationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PushNotificationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PushNotificationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PushNotificationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PushNotificationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PushNotificationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PushNotificationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PushNotificationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PushNotificationGetPayload<T>, Context>) => Promise<Prisma.PushNotificationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PushNotificationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PushNotificationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PushNotificationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PushNotificationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PushNotificationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PushNotificationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PushNotificationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PushNotificationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PushNotificationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PushNotificationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PushNotificationGetPayload<T>, Context>) => Promise<Prisma.PushNotificationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PushNotificationFindFirstArgs, TData = Prisma.PushNotificationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PushNotificationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PushNotificationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PushNotificationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PushNotificationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PushNotificationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PushNotificationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PushNotificationFindManyArgs, TData = Array<Prisma.PushNotificationGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PushNotificationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PushNotificationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PushNotificationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PushNotificationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PushNotificationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PushNotificationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PushNotificationFindUniqueArgs, TData = Prisma.PushNotificationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PushNotificationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PushNotificationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PushNotificationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PushNotificationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PushNotificationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PushNotificationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PushNotificationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PushNotificationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PushNotificationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PushNotificationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PushNotificationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PushNotificationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PushNotificationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PushNotificationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PushNotificationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PushNotificationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PushNotificationGetPayload<T>, Context>) => Promise<Prisma.PushNotificationGetPayload<T>>
            };

    };
}
