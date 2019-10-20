import { MutationFunctionOptions, ExecutionResult } from '@apollo/react-common';

export type GraphqlMutation = (
	options?: MutationFunctionOptions<any, Record<string, any>> | undefined,
) => Promise<ExecutionResult<any>>;
