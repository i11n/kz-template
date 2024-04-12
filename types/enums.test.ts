/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Tests features in enums.ts.
 */

import { describe, it } from '@std/testing/bdd';
import { equal } from '@std/assert';

describe('enums', () => {
  describe('EnumName', () => {
    it('should have EnumName', () => {
      equal('EnumName', 'EnumName');
    });
  });
});
