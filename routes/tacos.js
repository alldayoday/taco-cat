import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'

import * as tacosCtrl from '../controllers/tacos.js'


const router = Router()

router.get('/', tacosCtrl.index)
router.post('/', isLoggedIn, tacosCtrl.create)
router.get('/:id', tacosCtrl.show)
router.patch('/:id/flip-tasty', isLoggedIn, tacosCtrl.flipTasty)
router.get('/:id/edit', isLoggedIn, tacosCtrl.edit)
router.put('/:id', isLoggedIn, tacosCtrl.update)
router.delete('/:id', isLoggedIn, tacosCtrl.delete)

export {
  router
}