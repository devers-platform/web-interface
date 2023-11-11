export default function ArticleItem() {
    return <div className="py-4 px-8 my-2 container bg-slate-200 relative">
        <p className="font-bold text-xl">A title</p>
        <p className="text-gray-800 text-sm"><span className="font-semibold">Hoarfroster</span>: LOREM IPSUM APDEJ DIAWO DAIWD WAOID</p>
        <p className="text-gray-600 text-sm py-1">2011/2/1 点赞数 20 收藏数 20</p>
        <div className="absolute bottom-5 right-4 text-sm"><span className="bg-slate-400 px-1 py-0.5 mx-1">Java</span><span className="bg-slate-400 px-1 py-0.5 mx-1">TS</span><span className="bg-slate-400 px-1 py-0.5 mx-1">Web UI</span></div>
    </div>
}