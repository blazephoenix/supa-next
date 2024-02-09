// theme/themeConfig.ts
import type { ThemeConfig } from 'antd'
import themeSchema from '@/styles/theme.json'

const theme: ThemeConfig = { token: { ...themeSchema.token, fontSize: 14 } }

export default theme
