import StoreCard from "@/components/storecard";
export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <StoreCard menuName={"치킨 이름"} brandName={"치킨 브랜드"} img={"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"} price={29300} contents={"치킨 부가 설명란"} likes={0} />
        </>
    );
}
