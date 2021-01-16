import { ColumnProps, ImageProps, UserProps } from '../store/types'

interface CheckCondition {
  format?: string[];
  size?: number;
}
type PicErrorType = 'size' | 'format' | null

/**
 * 校验图片上传格式
 * @param file 
 * @param condition 
 */
export function beforeUploadCheck (file: File, condition: CheckCondition) {
    const { format, size } = condition;
    const isPicSuffixValidate = format ? format.includes(file.type) : true;
    const isPicSizeValidate = size ? ((file.size / 1024 /1024) < size) : true ; // 小于1M
    let error: PicErrorType = null;

    if (!isPicSizeValidate) {
        error = 'size';
    }

    if (!isPicSuffixValidate) {
        error = 'format';
    }

    return {
        passed: isPicSuffixValidate && isPicSizeValidate,
        error
    }
}

/**
 * 专栏的数据结构式的key值是专栏的id，value值是专栏对应的内容，这里要获取将数据结构进行改变
 * @param obj 
 */
export const objToArr = <T>(obj: {[key: string]: T}) => {
    return Object.keys(obj).map(item => (obj[item]));
}

/**
 * 
 * @param arr 数组类型的数据转换成对象的形式，与react平铺的思想相同
 */
export const arrToObj = <T extends {_id: string}>(arr: Array<T>) => {
    return arr.reduce((prev, current) =>{
        if (current._id) {
            prev[current._id] = current;
        }
        return prev;
    }, {} as {[key: string]: T})
}

/**
 * 阿里云OSS图片地址后面跟上参数控制图片大小和分辨率实现图片压缩
 * @param data 
 * @param width 
 * @param height 
 * @param format 
 */
export function generateFitUrl (data: ImageProps, width: number, height: number, format = ['m_pad']) {
  if (data && data.url) {
    const formatStr = format.reduce((prev, current) => {
      return current + ',' + prev
    }, '')
    data.fitUrl = data.url + `?x-oss-process=image/resize,${formatStr}h_${height},w_${width}`
  }
}

export function addColumnAvatar (data: ColumnProps | UserProps, width: number, height: number) {
  if (data.avatar) {
    generateFitUrl(data.avatar, width, height)
  } else {
    const parseCol = data as ColumnProps
    data.avatar = {
      fitUrl: require(parseCol.title ? '@/assets/column.jpg' : '@/assets/avatar.jpg')
    }
  }
}