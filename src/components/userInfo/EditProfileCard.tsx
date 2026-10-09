'use client'
import { authClient } from '@/lib/auth-client'
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from '@heroui/react'
import { useEffect, useState } from 'react'

interface EditProfileProps {
  user?: {
    name: string
  }
}
type newUserDataProps = {
  name: string
}

const EditProfileCard = ({ user }: EditProfileProps) => {
  const [name, setName] = useState(user?.name ?? '')
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setName(user?.name ?? '')
  }, [user?.name])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newUserData = Object.fromEntries(
      formData.entries()
    ) as newUserDataProps

    const { error } = await authClient.updateUser({
      name: newUserData.name,
    })

    if (error) {
      toast.danger(error.message)
      return
    }
    toast.success('আপনার প্রোফাইল সফলভাবে আপডেট করা হয়েছে!')
  }
  return (
    <div>
      <Card className='w-full mt-8'>
        <Card.Header>
          <Card.Title className='mb-3 text-lg font-semibold'>
            নাম হালনাগাদ করুন{' '}
          </Card.Title>
        </Card.Header>
        <Form onSubmit={onSubmit}>
          <Card.Content>
            <div className='flex flex-col gap-4'>
              <TextField name='name' type='text'>
                <Label>নাম</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant='secondary'
                  className='border border-gray-200 rounded-md bg-white shadow-none py-2.5'
                />
              </TextField>
            </div>
          </Card.Content>
          <Card.Footer className='mt-4 flex flex-col gap-2'>
            <Button
              className='w-full rounded-md bg-[#047F39] text-white'
              type='submit'
            >
              আপডেট
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  )
}

export default EditProfileCard
