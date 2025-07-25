import { useRouter } from "next/navigation"

export default function useNavigate() {
  const router = useRouter();

  const routeTo = (url: string) => {
    router.push(url)
  }

  return { routeTo };
}