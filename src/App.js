import React from "react"
import "./App.css"
import { Routing } from "./components/common/Routing"
import { AdsState } from "./context/adsContext/AdsState"
import { AuthState } from "./context/authContext/AuthState"
import { BlogState } from "./context/blogContext/BlogState"
import { NoticeState } from "./context/noticeContext/NoticeState"
import { PollState } from "./context/pollContext/PollState"
import { PostState } from "./context/postContext/PostState"
import { UserState } from "./context/userContext/UserState"
import { ResourceState } from "./context/resourcesContext/ResourceState"

export const App = () => {
  return (
    <AuthState>
      <UserState>
        <PollState>
          <PostState>
            <BlogState>
              <ResourceState>
              <AdsState>
                <NoticeState>
                  <Routing />
                </NoticeState>
              </AdsState>
              </ResourceState>
            </BlogState>
          </PostState>
        </PollState>
      </UserState>
    </AuthState>
  )
}
