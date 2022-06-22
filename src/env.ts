/*      #######                                               */
/*   ###       ###                                            */
/*  ##   ## ##   ##   F: env.ts                               */
/*       ## ##                                                */
/*                    C: 2022/06/22 11:11:54 by:dnettoRaw     */
/*  ##   ## ##   ##   U: 2022/06/22 11:12:06 by:dnettoRaw     */
/*    ###########                                             */

import {exportVariable} from '@actions/core'

export async function setValueToEnv(params: { name: string ; value: any }): Promise<boolean> {
  try {
    const {name, value} = params
    exportVariable(name, value)
    return true
  } catch (error) {
    return false
  }
}
