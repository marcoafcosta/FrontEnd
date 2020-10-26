import React from 'react'
import { Segment, Image, Button } from 'semantic-ui-react'

const src = 'https://www.remodelista.com/files/styles/733_0s/public/fields/breville-bit-more-toaster-2-slice-remodelista.jpg'

const ProductDemoToaster = () => (
  <Segment>
    <Image src={src} size='medium' floated='left' />
    <p>
    The Breville Bit More 2-Slice Toaster is one of the smallest among two-slice toasters,<br></br>
     measuring 7.75 by 11.25 by 8 inches. The electrical cord stores up inside the toaster from below, <br></br>
     which could prove useful if it can't live on the counter full time<br></br>

1 year guarantee<br></br>
1 year warranty<br></br>
    </p>
   <Button> Buy Now </Button>
  </Segment>
)

export default ProductDemoToaster