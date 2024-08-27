import { QUERY_KEY_DETAIL_USER } from '@/app/constant/constant'
import { qlNguoiDungServices } from '@/app/service/qlNguoiDung.service'
import { useQuery } from '@tanstack/react-query'

export const useGetDetailUser = () => {
    const q = useQuery({
        queryKey: [QUERY_KEY_DETAIL_USER],
        queryFn: () => qlNguoiDungServices.getDetailUser(),
    })

    return {
        ...q,
        data: q?.data?.data,
    }
}
