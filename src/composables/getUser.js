import { ref } from 'vue'

// firebase imports
import { auth } from '@/firebase/config'
import { onAuthStageChanged } from 'firebase/auth'

// refs
const user = ref(auth.currentUser)

// auth hanges
onAuthStageChanged(auth, (_user) => {
  console.log('User state changed. Current user is:', _user)
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser