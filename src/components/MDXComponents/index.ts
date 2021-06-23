import {
  Aside,
  Definition,
  CustomLink,
  CustomTitle,
  CustomText,
  Padding,
  CustomUnorderedList,
  CustomListItem,
  CustomImage,
  CustomPre,
  CustomCode,
  CustomDiv,
  TextColorMode,
} from './MDXComponents'
import Sparkles from '../Sparkles'
import { Checkbox, VStack } from '@chakra-ui/react'

const titles: any = {}
new Array(6).fill('').forEach((x, i) => {
  titles['h' + (i + 1).toString()] = CustomTitle
})

const MDXComponents = {
  a: CustomLink,
  p: CustomText,
  ul: CustomUnorderedList,
  li: CustomListItem,
  pre: CustomPre,
  code: CustomCode,
  div: CustomDiv,
  VStack,
  Aside,
  Padding,
  Definition,
  Checkbox,
  TextColorMode,
  Image: CustomImage,
  Sparkles,
  ...titles,
}

export default MDXComponents
