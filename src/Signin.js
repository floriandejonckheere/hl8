import React  from 'react'
import { Link } from 'react-router-dom'
import { MdHealthAndSafety } from 'react-icons/md'

import {
  Page,
  List,
  ListButton,
} from 'konsta/react'

function Home() {
  return (
    <Page>
      <div class="my-8 w-full text-center">
        <MdHealthAndSafety />
      </div>

      <List inset strong>
        <Link to="/patient/">
          <ListButton>Sign in as patient</ListButton>
        </Link>

        <Link to="/professional/">
          <ListButton>Sign in as healthcare professional</ListButton>
        </Link>
      </List>
    </Page>
  )
}

export default Home
