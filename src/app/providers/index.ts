import { compose } from 'shared/utils';

import { withChakra } from './with-chakra';
import { withRouter } from './with-router';
import { withSuspense } from './with-suspense';
import { withQueryClient } from './with-query-client';

export const withProviders = compose(withChakra, withQueryClient, withSuspense, withRouter);
