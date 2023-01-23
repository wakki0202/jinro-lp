import type { NextPage } from "next";
import React from "react";
import { useState } from "react";
import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Home: NextPage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);

  return (
    <div className="bg-black text-white">
      <header>
        <div className="flex">
          <div id="logo-box" className="w-3/12">
            <div id="ロゴ">ロゴ</div>
          </div>
          <div id="header-content-box" className="w-9/12">
            <ul className="flex gap-3">
              <li>ABOUT</li>
              <li>RULE</li>
              <li>SET</li>
              <li>CHARACTER</li>
              <li>MEMBER</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </header>
      <section id="mv">
        <div className="">
          <img src="/jinro-mv-img.png" alt="" className="block m-auto" />
        </div>
      </section>
      <section id="news"></section>
      <section id="about" className="py-40 bg-black">
        <div className="bg-gray-900 w-10/12 m-auto py-20">
          <div id="about-title">
            <h3 className="border w-fit m-auto text-3xl px-36 py-3">ABOUT</h3>
          </div>
          <div id="about-description" className="pb-40">
            <div className="text-center text-2xl">
              <p className="py-12">
                従来の人狼ゲームとは大きく異なる点があるそれは、
              </p>

              <p className="pb-12">『人狼を”見つけてはいけない”』</p>

              <p className="pb-12">
                人狼を見つけてしまった暁には、 <br />
                襲撃され、ゲームから脱落する
              </p>

              <p className="pb-12">
                人狼を見つけないように、
                <br />
                また、他のプレイヤーに人狼を見つけさせるように
              </p>

              <p className="pb-12">
                運と戦略を駆使し、
                <br />
                最後の1人になるまで戦いぬけ！
              </p>
            </div>
          </div>

          <div id="concept-area" className="border border-white">
            <div className="p-10">
              <div className="border-b border-white w-4/12">
                <h3 className="font-bold text-4xl pb-3">CONCEPT</h3>
              </div>
              <p className="pt-3 text-lg">
                人狼を見つけてはいけないという従来の人狼とは全く異なるコンセプト。
                <br />
                「運」と「戦略」が入り交じった勝負から繰り広げられる、駆け引きやどんでん返しや策略による、高揚感と緊迫感を楽しんでいただけます。
              </p>
            </div>
          </div>

          <div id="character-area" className="border border-white text-right">
            <div className="p-10">
              <div className="border-b border-white w-4/12 ml-auto">
                <h3 className="font-bold text-4xl pb-3">CHARACTER</h3>
              </div>
              <p className="pt-3  text-lg">
                一枚一枚が切り札級の能力。使えば必ず戦況が変化する。
                <br />
                また「棺屋」「音楽家」「鎧の人狼」のような、今までの人狼ゲームには存在しないオリジナルキャラクターも？
                <br />
                細部まで作り込まれた、キャラクターデザインも見どころです。
              </p>
            </div>
          </div>
          <div id="material-area" className="border border-white">
            <div className="p-10">
              <div className="border-b border-white w-4/12">
                <h3 className="font-bold text-4xl pb-3">MATERIAL</h3>
              </div>
              <p className="pt-3  text-lg">
                カードの素材は、普通の紙を印刷するのではなく、紙にエンボス加工を施しています。
                <br />
                ボードゲームとは思えない、ついつい触りたくなる高級感のある質感を楽しんでいただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="rule" className="py-20">
        <div id="rule-title">
          <h3 className="border w-fit m-auto px-36 py-3 mb-8 text-3xl">RULE</h3>
        </div>
        <div
          id="preparation"
          className="flex w-10/12 mx-auto py-5 border-t border-b border-white items-center"
        >
          <div className="w-4/12 m-auto">アイコン</div>
          <div className="text-center w-4/12 m-auto">
            <h3 className="text-2xl">PREPARATION</h3>
            <p>-ゲームの準備-</p>
          </div>

          <div className="w-4/12 m-auto">
            <button
              className="w-full hover:bg-[#0F3E6C] hover:text-white duration-200 font-bold text-right"
              onClick={() => setShowModal(true)}
              type="button"
            >
              ＞
            </button>
            {showModal ? (
              <>
                <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-11/12 my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5  border-solid border-slate-200 rounded-t ">
                        <h3 className="text-3xl font-semibold"></h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          テスト1
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                        <button
                          className="text-[#0F3E6C] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          閉じる
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>

        <div
          id="preparation"
          className="flex justify-between  w-10/12 mx-auto py-5 border-t border-b border-white items-center"
        >
          <div className="w-4/12 m-auto">アイコン</div>
          <div className="text-center w-4/12">
            <h3 className="text-2xl">HOW TO PLAY</h3>
            <p>-遊び方-</p>
          </div>

          <div className="w-4/12">
            <button
              className="w-full hover:bg-[#0F3E6C] hover:text-white duration-200 font-bold text-right"
              onClick={() => setShowModal(true)}
              type="button"
            >
              ＞
            </button>
            {showModal ? (
              <>
                <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-11/12 my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5  border-solid border-slate-200 rounded-t ">
                        <h3 className="text-3xl font-semibold"></h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          テスト1
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                        <button
                          className="text-[#0F3E6C] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          閉じる
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>

        <div
          id="preparation"
          className="flex justify-between  w-10/12 mx-auto py-5 border-t border-b border-white items-center"
        >
          <div className="w-4/12 m-auto">アイコン</div>
          <div className="text-center w-4/12">
            <h3 className="text-2xl">WIN/LOSE DECISION</h3>
            <p>-勝敗決定-</p>
          </div>

          <div className="w-4/12">
            <button
              className="w-full hover:bg-[#0F3E6C] hover:text-white duration-200 font-bold text-right"
              onClick={() => setShowModal(true)}
              type="button"
            >
              ＞
            </button>
            {showModal ? (
              <>
                <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-11/12 my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5  border-solid border-slate-200 rounded-t ">
                        <h3 className="text-3xl font-semibold"></h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          テスト1
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                        <button
                          className="text-[#0F3E6C] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          閉じる
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>

        <div
          id="preparation"
          className="flex w-10/12 mx-auto py-5 border-t border-b border-white items-center"
        >
          <div className="w-4/12">アイコン</div>
          <div className="text-center w-4/12">
            <h3 className="text-2xl">GLOSSARY</h3>
            <p>-用語解説-</p>
          </div>

          <div className="w-4/12">
            <button
              className="w-full hover:bg-[#0F3E6C] hover:text-white duration-200 font-bold text-right"
              onClick={() => setShowModal(true)}
              type="button"
            >
              ＞
            </button>
            {showModal ? (
              <>
                <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-11/12 my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5  border-solid border-slate-200 rounded-t ">
                        <h3 className="text-3xl font-semibold"></h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          テスト1
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                        <button
                          className="text-[#0F3E6C] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          閉じる
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
      </section>

      <section id="set" className="py-20">
        <div id="set-title">
          <h3 className="border w-fit m-auto px-36 py-3 text-3xl">SET</h3>
        </div>
      </section>
      <section id="character" className="py-20">
        <div id="character-title">
          <h3 className="border w-fit m-auto px-36 py-3 text-3xl">CHARACTER</h3>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div id="contact-title">
          <h3 className="border w-fit m-auto px-36 py-3 text-3xl">CONTACT</h3>
        </div>
        <p className="text-center py-20 text-xl">
          ゲーム内容に関するご質問や、その他お悩みがございましたら、まずはお気軽にご連絡ください。
        </p>

        <p className="text-center underline text-xl">
          <a href="">お問合せフォームへ</a>
        </p>

        <div className="flex justify-center gap-10 pt-16">
          <div className="p-5 border-2 border-white rounded-full text-black hover:text-white bg-white hover:bg-black duration-200">
            <FaYoutube size={40} />
          </div>
          <div className="p-5 border-2 border-white rounded-full text-black hover:text-white bg-white hover:bg-black duration-200">
            <FaInstagram size={40} />
          </div>
          <div className="p-5 border-2 border-white rounded-full text-black hover:text-white bg-white hover:bg-black duration-200">
            <FaTwitter size={40} />
          </div>
        </div>
      </section>

      <footer className="text-center py-1 border-t border-white">
        copyright©️2021jinrocolosseum
      </footer>
    </div>
  );
};

export default Home;
