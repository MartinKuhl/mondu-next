'use client'

import { useTheme } from 'next-themes'

const LOGO_NAMES = {
  invoice: 'invoice',
  direct_debit: 'sepa',
  installment: 'installments',
  installment_by_invoice: 'installments',
  pay_now: 'instant-pay',
}

export default function PaymentLogo({ method }) {
  const { resolvedTheme } = useTheme()
  const folder = resolvedTheme === 'light' ? 'light' : 'dark'
  return (
    <img
      src={`/logos/${folder}/${LOGO_NAMES[method]}.svg`}
      alt=""
      width={92}
      height={42}
    />
  )
}
