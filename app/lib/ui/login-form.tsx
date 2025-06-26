import BlinkBlur from "react-loading-indicators/BlinkBlur";
import {useActionState} from "react";
import {loginWithCredentials} from "@/app/lib/actions/auth";
import {Description, Field, Input, Label} from "@headlessui/react";
import {redirect} from "next/navigation";
import Link from "next/link";

export default function LoginForm() {

    const [session, action, isPending] = useActionState(loginWithCredentials, null);


    if (!isPending && session?.success === true) {
        setTimeout(() => {
            //redirect(session.redirectTo);
            location.href = session.redirectTo;
        }, 500);
    }


    return (
        <form className="space-y-6" action={action}>
            <Input type="hidden" name="callbackUrl" value="/api/auth/callback/credentials"/>
            <Input type="hidden" name="redirectTo" value="/dashboard"/>
            {(session && !session?.success && !isPending) && <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert">
                {session?.message}
            </div>}
            {(session && session?.success && !isPending) && <div
                className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert">
                {session?.message}
            </div>}

            <Field>
                <div className="flex items-center justify-between">
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Eposta</label>
                    <Description className="text-sm text-gray-900">
                        <Link target={"_blank"} className={"font-semibold text-teal-600 hover:text-teal-500 flex items-center justify-between"}
                              href={"https://684d1a6d65ed0871391514c6.mockapi.io/kayra/test-case/users"}>
                            <text>Demo kullanıcılar</text>
                            <svg className="w-8 h-6" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                 fill="currentColor" viewBox="0 -6 30 35">
                                <path fillRule="evenodd"
                                      d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                                      clipRule="evenodd"/>
                            </svg>

                        </Link>
                    </Description>
                </div>
                <div className="mt-2">
                    <Input type="email" name="email" id="email" autoComplete="email" required
                           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                </div>
            </Field>

            <Field>
            <div className="flex items-center justify-between">
                    <Label htmlFor="password"
                           className="block text-sm/6 font-medium text-gray-900">Şifre</Label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Parolamı
                            unuttum!</a>
                    </div>
                </div>
                <div className="mt-2">
                    <Input type="password" name="password" id="password" autoComplete="current-password"
                           required
                           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                </div>
            </Field>

            <div>
                <button disabled={isPending == true} type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {isPending ?
                        <div><BlinkBlur color="#ffffff" size="small" text="" textColor="" style={{fontSize: '4px'}}/>
                        </div> : "Giriş yap"}
                </button>
            </div>
        </form>
    )
}