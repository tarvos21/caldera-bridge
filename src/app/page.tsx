'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [amount, setAmount] = React.useState(2.99792458);
  return (
    <main suppressHydrationWarning>
      <Head>
        <title>Caldera Bridge</title>
      </Head>

      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logo className='w-16' />
          <h1 className='mt-4'>Caldera Bridge</h1>
          <p className='mt-2 text-sm text-gray-800'>
            Safest bridge for your Crypto assets{' '}
          </p>

          <div className='mt-8 w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8'>
            <form className='space-y-6' action='#'>
              <h5 className='text-xl font-medium text-gray-900 dark:text-white'>
                Bridge Assets
              </h5>
              <div>
                <label
                  htmlFor='token'
                  className='mb-2 block text-start text-sm font-medium text-gray-900 dark:text-white'
                >
                  Choose Token
                </label>
                <select
                  id='token'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  required
                >
                  <option value='usdc'>USDC</option>
                  <option value='eth'>ETH</option>
                  <option value='matic'>MATIC</option>
                  <option value='uni'>UNI</option>
                  <option value='arb'>ARB</option>
                  <option value='dai'>DAI</option>
                  <option value='link'>LINK</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor='amount'
                  className='mb-2 block text-start text-sm font-medium text-gray-900 dark:text-white'
                >
                  Input Amount
                </label>
                <input
                  type='number'
                  step='0.00000001'
                  id='amount'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  placeholder='2.99792458'
                  pattern=''
                  onChange={(e) => setAmount(Number(e.target.value))}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='from_chain'
                  className='mb-2 block text-start text-sm font-medium text-gray-900 dark:text-white'
                >
                  From(Source Chain)
                </label>
                <select
                  id='from_chain'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  required
                >
                  <option value='polygon'>Polygon</option>
                  <option value='eth'>Ethereum Mainnet</option>
                  <option value='arb'>Arbitrum</option>
                  <option value='op'>Optimism</option>
                  <option value='stark'>Starknet</option>
                  <option value='metis'>Metis</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor='to_chain'
                  className='mb-2 block text-start text-sm font-medium text-gray-900 dark:text-white'
                >
                  To(Destination Chain)
                </label>
                <select
                  id='to_chain'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  required
                >
                  <option value='eth'>Ethereum Mainnet</option>
                  <option value='polygon'>Polygon</option>
                  <option value='arb'>Arbitrum</option>
                  <option value='op'>Optimism</option>
                  <option value='stark'>Starknet</option>
                  <option value='metis'>Metis</option>
                </select>
              </div>
              <div className='flow-root'>
                <ul
                  role='list'
                  className='divide-y divide-gray-200 dark:divide-gray-700'
                >
                  <li className='py-3 sm:py-4'>
                    <div className='flex items-center space-x-4'>
                      <div className='min-w-0 flex-1'>
                        <p className='truncate text-start text-sm font-medium text-gray-900 dark:text-white'>
                          Transaction Fees
                        </p>
                      </div>
                      <div className='inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white'>
                        {amount * 0.00987}
                      </div>
                    </div>
                  </li>
                  <li className='py-3 sm:py-4'>
                    <div className='flex items-center space-x-4'>
                      <div className='min-w-0 flex-1'>
                        <p className='truncate text-start text-base font-medium text-gray-900 dark:text-white'>
                          You Will Receive:
                        </p>
                      </div>
                      <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                        {amount * 0.99013}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <button
                type='submit'
                className='w-full rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-6 py-4 text-center text-base font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:focus:ring-blue-800'
                style={{ background: '#7DFFAF' }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 0,
                    margin: 0,
                    background: 'transparent',
                    boxShadow: 'none',
                  }}
                >
                  <ConnectButton
                    accountStatus='address'
                    chainStatus='name'
                    showBalance={true}
                  />
                </div>
              </button>

              <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
                Not installed?{' '}
                <a
                  href='https://metamask.io'
                  className='text-blue-700 hover:underline dark:text-blue-500'
                >
                  Install MetaMask
                </a>
              </div>
            </form>
          </div>

          <div className='mt-8 w-full max-w-sm rounded-lg border border-gray-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-3 md:p-4'>
            <div>
              <ul>
                <li className='py-1 sm:py-1'>
                  <div className='flex items-center space-x-4'>
                    <div className='min-w-0 flex-1'>
                      <p className='truncate text-start text-base font-medium text-gray-900 dark:text-white'>
                        My Transactions
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='flow-root'>
              <ul
                role='list'
                className='divide-y divide-gray-200 dark:divide-gray-700'
              >
                <li className='py-3 sm:py-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='min-w-0 flex-1'>
                      <p className='truncate text-start text-sm font-medium text-gray-900 dark:text-white'>
                        <a
                          href='https://etherscan.io/tx/0xbe5f17a796c6b6a8a082568868d0560582c5ba6697243160cc7927b70dde8f9c'
                          className='truncate font-medium text-blue-600 hover:underline dark:text-blue-500'
                          target='_blank'
                        >
                          0xbe5f17a796c6b6a8a082568868d0560582c5ba6697243160cc7927b70dde8f9c
                        </a>
                      </p>
                    </div>
                    <div className='inline-flex items-center text-sm text-gray-600 dark:text-white'>
                      Sep 13, 2023
                    </div>
                  </div>
                </li>
                <li className='py-3 sm:py-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='min-w-0 flex-1'>
                      <p className='truncate text-start text-sm font-medium text-gray-900 dark:text-white'>
                        <a
                          href='https://etherscan.io/tx/0x570861d5b73d243483d3eeb0ced65fcb28431bd845af91545e5b8d445d49bb39'
                          className='truncate font-medium text-blue-600 hover:underline dark:text-blue-500'
                          target='_blank'
                        >
                          0x570861d5b73d243483d3eeb0ced65fcb28431bd845af91545e5b8d445d49bb39
                        </a>
                      </p>
                    </div>
                    <div className='inline-flex items-center text-sm text-gray-600 dark:text-white'>
                      Sep 13, 2023
                    </div>
                  </div>
                </li>
                <li className='py-3 sm:py-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='min-w-0 flex-1'>
                      <p className='truncate text-start text-sm font-medium text-gray-900 dark:text-white'>
                        <a
                          href='https://etherscan.io/tx/0x181574b3b140ebdc40a0b96b1ff1f3ca98814af0c71ad0e636b45086388fd330'
                          className='truncate font-medium text-blue-600 hover:underline dark:text-blue-500'
                          target='_blank'
                        >
                          0x181574b3b140ebdc40a0b96b1ff1f3ca98814af0c71ad0e636b45086388fd330
                        </a>
                      </p>
                    </div>
                    <div className='inline-flex items-center text-sm text-gray-600 dark:text-white'>
                      Sep 12, 2023
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <ButtonLink
            className='mt-6'
            href='https://github.com/tarvos21/caldera-bridge'
            variant='light'
          >
            <p className=''>
              <ArrowLink href='https://github.com/tarvos21/caldera-bridge'>
                See the repository
              </ArrowLink>
            </p>
          </ButtonLink>

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://github.com/tarvos21'>
              Satoshi Nakamoto
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
