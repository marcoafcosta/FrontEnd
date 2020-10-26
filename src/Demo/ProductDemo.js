import React from 'react'
import { Segment, Image, Button } from 'semantic-ui-react'

const src = 'https://media.debenhams.com/i/debenhams/325004924860_1/black_and_grey_mini_me_coffee_machine_by_delonghi_edg155.jpg?w=1536&h=1536&fmt=webp&qlt=60'

const ProductDemo = () => (
  <Segment>
    <Image src={src} size='medium' floated='left' />
    <p>
    Product description<br></br>
Item No. 3250049248<br></br>
Make your coffee shop favourites at home with the 'Mini Me' coffee maker. 
The easy to use pod system means you can make the coffee you love, mess free whenever you want.<br></br>
<br></br>
Model number: EDG155<br></br>
15 bar pressure<br></br>
Power: 1500 watts<br></br>
Capacity: 0.8L<br></br>
Dimensions: 305 x 115 x 315mm<br></br>
Removable reservoir: Yes<br></br>
Removable drip tray: Yes<br></br>
Used capsule container: No<br></br>
1 year guarantee<br></br>
1 year warranty<br></br>
    </p>
   <Button> Buy Now </Button>
  </Segment>
)

export default ProductDemo