import React from 'react'
import Item from './Item'
import m from '../images/m3.jpeg'
import cb from '../images/cb.jpeg'
import pb from '../images/pb.jpeg'
import db from '../images/db.jpeg'
import fb from '../images/fb.jpeg'
import prb from '../images/prb.jpeg'
import mb from '../images/mb.webp'

import  cab from '../images/cab.jpeg'
import  pab from '../images/pab.jpeg'
import  mub from '../images/mab.jpeg'

import  ic from '../images/ic.jpeg'
import  cake from '../images/cake.jpeg'
import  drink from '../images/drinks.jpeg'





// import { Link, Outlet } from 'react-router-dom'

function Menu() {
  return (
    <>

      <div> <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br> </div>
      <div className='a'  > <h3>  <img src={m} /> </h3>    <br></br>     </div>
      <div> <br></br><br></br><br></br></div>




      <div id='c'>   <h5>Main Course</h5>             </div>
      <div id='nv'>   <h2>Non-Veg</h2>             </div>

      <div id='left'>
        <Item
          name='Cicken Biryani'
          cost='Rs.280 /-'
          desc='Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together.'
          im={cb}


        />
      </div>
      <div id='mid'>
        <Item
          name='Pot Biryani'
          cost='Rs.450 /-  '
          desc='The Clay Biryani Pot is a traditional cooking pot for making most Indian dishes the natural way.It also enhances the taste and aroma of the spices naturally.'
          im={pb}

        />
      </div>
      <div id='right'>
        <Item
          name='Dilkhush Biryani'
          cost='Rs.480 /-'
          desc='Special dish where the spice mixture clings to the meat.  Have a party, have a ball this dish here will please you all. Seriously a super aromatic curry.'
          im={db}
        />
      </div>
      <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
      <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
      <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>

      <div id='left'>
        <Item
          name='Fish Biryani'
          cost='Rs.300 /-'
          desc='Fish Biryani is a flavorful mix of rice, spices and fish fillets. Made in traditional Hyderabadi style, this recipe will become your favorite immediately.           '
          im={fb}
        />

      </div>
      <div id='mid'>
        <Item
          name='Prawn Biryani'
          cost='Rs.320 /-'
          desc='Prawn biryani recipe is a flavourful preparation that combines fragrant rice and fresh prawns with a piquant masala to make delicious mouthfuls. This is cooked on dum which gives it a unique flavour, and istruly a treat for all seafood lovers.'
          im={prb}
        />
      </div>
      <div id='right'>
        <Item
          name='Mutton Biryani'
          cost='Rs.380 /-'
          desc='The Best Mutton Biryani Recipe ever! Prepared with utmost care and love, this Mutton Biryani holds a regal legacy from the kitchen of Nawabs and Nizams that needs no introduction or special mentions.'
          im={mb}
        />
      </div>

      <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
      <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
      <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>


      <div id='v'>   <h2>Veg</h2>             </div>


      <div id='left'>
        <Item
          name='Cashew Biryani'
          cost='Rs.300 /-'
          desc=' this is a vegetarian version of biryani, I made it at home in pressure cooker to give "Dum" to biryani. As the name says the main ingredient is "Kaju" (Cashew Nuts) of this biryani.'
          im={cab}
        />

      </div>
      <div id='mid'>
        <Item
          name='Paneer Biryani'
          cost='Rs.280 /-'
          desc='The best side dishes to serve with biryani are raita, papadum, chutney, pickles, salad, dhal, vegetable curry, samosas, naan, tandoori chicken, butter chicken, bhindi masala, aloo gobi, and palak paneer.'
          im={pab}
        />
      </div>
      <div id='right'>
        <Item
          name='Mushroom Biryani'
          cost='Rs.270 /-'
          desc=' Mushroom biryani is a fantastic biryani for vegetarians. It has the aromatics and spices of a traditional biryani and the umami and bite.'
          im={mub}
        />


      </div>
      <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
      <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
      <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
      
      <div id='c'> <h5>Desserts</h5>               </div>
      <br></br><br></br>

      <div id='left'>
        <Item
          name='Ice-Cream'
          cost='Rs.100 /-'
          desc='We are having various delightful flavours of ice creams imported and created from various places around. '
          im={ic}
        />

      </div>
      <div id='mid'>
        <Item
          name='Cake'
          cost='Rs.300 /-'
          desc='We are having multiple tasteful cakes from basic flavours to deep flavours which make our cakes delicious. '
          im={cake}
        />
      </div>
      <div id='right'>
        <Item
          name='Soft Drinks'
          cost='Rs.90 /-'
          desc='Drinks like soft drinks and mojito with different essence. We also provide natural juice.'
          im={drink}
        />


      </div>
      <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
      <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
      <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>






    </>
  )
}

export default Menu;