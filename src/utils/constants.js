import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'we take our customers’ needs very seriously. A team of furniture designers work tirelessly to craft fresh new furniture designs that cater to the requirements of today’s homeowner flawlessly.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Furniture is amongst the most crucial elements of a home and more often than not a true reflection of the people living in it. From the style of bed to the colour of the chairs, every little detail makes a massive impact, which is why choosing the right furniture for your home is essential.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Dreaming about transforming your home? Just walk into the nearest furniture store, Urban Ladder, only, of course, for inspiration. With myriad options for both home and office, Urban Ladder is an excellent option for anyone who needs durable yet attractive furniture.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
