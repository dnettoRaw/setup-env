/*      #######                                               */
/*   ###       ###                                            */
/*  ##   ## ##   ##   F: wait.ts                              */
/*       ## ##                                                */
/*                    C: 2022/06/22 11:04:55 by:dnettoRaw     */
/*  ##   ## ##   ##   U: 2022/06/22 11:04:56 by:dnettoRaw     */
/*    ###########                                             */

export async function wait(milliseconds: number): Promise<string> {
  return new Promise(resolve => {
    if (isNaN(milliseconds)) {
      throw new Error('milliseconds not a number')
    }

    setTimeout(() => resolve('done!'), milliseconds)
  })
}
