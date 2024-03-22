import BurnButtonBar from './BurnButtonBar';
import BurnStatsContainer from './BurnStatsContainer';
import TransactionTable from './TransactionTableStyled';

export const BurnPage = () => {
    // Relevant state and functions

    return (
        <div>
            <DashboardLayoutStyled className="burnpage">
                <div className="top_conatiner burnpage" style={{ alignItems: "flex-start" }}>
                    <div className="info_box filled">
                        <h1 className="title">App TOKEN BURN</h1>
                        <p className="description medium"></p>

                        <BurnButtonBar
                            burnAmount={burnAmount}
                            onChangeBurnAmount={onChangeBurnAmount}
                            executeBurn={executeBurn}
                            txButton={txButton}
                            txProgress={txProgress}
                            burnTxHash={burnTxHash}
                        />

                        <BurnStatsContainer
                            statsSupplies={statsSupplies}
                            suppliesChain={suppliesChain}
                            tokenAddress={tokenAddress}
                        />
                    </div>
                </div>
            </DashboardLayoutStyled>

            <TransactionTable
                burnTransactions={burnTransactions}
                coinData={coinData}
            />

            <ChainSelector
                title={"Switch Token Chain"}
                openChainSelector={openChainSelector}
                setOpenChainSelector={setOpenChainSelector}
                chains={receiveChains}
                selectedChain={suppliesChain}
                setSelectedChain={setSuppliesChain}
            />
            <AppToast
                position={{ vertical: "bottom", horizontal: "center" }}
                message={toastMsg}
                severity={toastSev}
            />
        </div>
    );
};
