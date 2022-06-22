/*      #######                                               */
/*   ###       ###                                            */
/*  ##   ## ##   ##   F: main.ts                              */
/*       ## ##                                                */
/*                    C: 2022/06/22 11:04:50 by:dnettoRaw     */
/*  ##   ## ##   ##   U: 2022/06/22 11:18:20 by:dnettoRaw     */
/*    ###########                                             */

import * as core from '@actions/core'
import {extract, findPackageJson} from './package'
import {setValueToEnv} from './env'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')
    core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())

    core.setOutput('time', new Date().toTimeString())

    const followSymbolicLinks: boolean =
      core.getInput('follow-symlinks').toLowerCase() !== 'false'
    const path: string = core.getInput('path')
      ? `${process.env.GITHUB_WORKSPACE}/${core.getInput('path')}`
      : await findPackageJson(followSymbolicLinks)

    const packageVersion: string = await extract(path)

    setValueToEnv({name: 'PACKAGE_VERSION', value: packageVersion})
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
