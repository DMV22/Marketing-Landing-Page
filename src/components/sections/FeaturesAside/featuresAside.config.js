import { featureAsideData } from './featureAside.data'
import features1 from '../../../assets/features-large-1.svg'
import features2 from '../../../assets/features-large-2.svg'

export const featuresAsideConfig = [
  {
    type: 'quality',
    image: features1,
    data: featureAsideData.quality,
    imagePosition: 'right'
  },
  {
    type: 'support',
    image: features2,
    data: featureAsideData.support,
    imagePosition: 'left'
  }
]