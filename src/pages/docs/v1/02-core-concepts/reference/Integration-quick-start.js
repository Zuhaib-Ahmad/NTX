import React from 'react'
import { Redirect } from '@reach/router'

export default function Redirector({ path }) {
  return <Redirect from={path} to={`/docs/v1/smart-contract-integration/quick-start`} noThrow />
}
