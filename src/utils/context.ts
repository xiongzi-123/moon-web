import { UserItem } from '@/api/authorization/user'
import { TeamItemType } from '@/api/team/types'
import { BreadcrumbNameType } from '@/config/menu'
import { theme } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { SpaceSize } from 'antd/es/space'
import { createContext } from 'react'

export type ThemeType = 'light' | 'dark'
export type LangType = 'zh-CN' | 'en-US'

export type GlobalContextType = {
  theme?: ThemeType
  setTheme?: (theme: ThemeType) => void
  lang?: LangType
  setLang?: (lang: LangType) => void
  size?: SpaceSize
  setSize?: (size: SpaceSize) => void
  title?: string
  menuItems?: ItemType[]
  breadcrumbNameMap?: Record<string, BreadcrumbNameType>
  collapsed?: boolean
  setCollapsed?: (collapsed: boolean) => void
  userInfo?: UserItem
  setUserInfo?: (userInfo: UserItem) => void
  teamInfo?: TeamItemType
  setTeamInfo?: (teamInfo: TeamItemType) => void
  refreshMyTeamList?: boolean
  setRefreshMyTeamList?: () => void
}

export const GlobalContext = createContext<GlobalContextType>({
  lang: 'zh-CN',
  setLang: () => void 0,
  theme: 'light',
  setTheme: () => void 0,
  size: 'middle',
  setSize: () => void 0,
  title: 'Moon监控'
})

export const getUseTheme = (t?: ThemeType) => {
  return t === 'dark' ? theme.darkAlgorithm : undefined
}
