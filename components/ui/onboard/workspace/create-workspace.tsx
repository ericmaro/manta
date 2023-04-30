import { AppButton } from "@/components/ui/app-button";
import { TextInput, Stack, Divider } from "@mantine/core";
import { useState } from "react";
import { useForm } from '@mantine/form';
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { UseFormInput } from "@mantine/form/lib/types";

type InputForm = {
    name: string;
    url: string;


};

interface Props {
    onClick: () => void;
}

export default function CreateWorkspace(props: Props) {
    const { onClick } = props;
    const [parent, _] = useAutoAnimate()


    const form: any = useForm<InputForm>({
        initialValues: {
            name: '',
            url: '',
  
        },
        validate: {
            name: (value) =>false,
            url: (value) => false,
       
        },
    });
    return (
        <Stack ref={parent}>

            <form onSubmit={form.onSubmit((values: InputForm) => onClick())}>
                <Stack>
                    <Divider my="sm" />
                    <TextInput
                        withAsterisk
                        color="brand"
                        label="Workspace Name"
                        placeholder="Your full name"
                        {...form.getInputProps('name')}
                    />
                    <TextInput
                        withAsterisk
                        color="brand"
                        label="Workspace URL"
                        placeholder="your-url.com"
                        {...form.getInputProps('url')}
                    />

                 

                    <AppButton h={50} variant="gradient" gradient={{ from: '#80808030', to: '#80808005', deg: 35 }} styles={(theme) => ({
                        root: {
                            boxShadow: 'inset 0 0 0.5px 1px #80808030, 0 0.3px 0.4px #80808040',

                        }
                    })} type="submit" >Create Workspace</AppButton>
                </Stack>
            </form>

        </Stack>
    )
}
