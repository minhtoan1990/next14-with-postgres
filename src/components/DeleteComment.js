'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { deleteComment } from '../app/actions'

const initialState = {
  message: null,
}

function DeleteButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending}>
      Delete
    </button>
  )
}

export default function DeleteComment({ id }) {
  const [state, formAction] = useFormState(deleteComment, initialState)
  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton />
    </form>
  )
}