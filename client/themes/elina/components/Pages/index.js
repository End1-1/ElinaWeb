import React, { useEffect }  from 'react';
import defaultClasses from './index.module.css';
import { withRouter } from "react-router";
import Page from 'Components/Page';
import { useHome } from 'Talons/Home/useHome';
import { fetchPage } from 'Store/actions/page';
import { mergeClasses } from 'Helper/classify';
import Slider from 'Components/Slider';
import Banner from 'Components/Banner';
import BannerAndProductList from 'Components/BannerAndProductList';
import HomeFooterBlocks from 'Components/HomeFooterBlocks';
import ProductSlider from 'Components/ProductSlider/productSlider';
import BannerCarousel from 'Components/Carousel';
import Head from 'Components/Head';
import { fetchBanner } from 'Store/actions/banner';

const Index = (props) => {
    const { page, isMobile, isTablet, width, __ } = useHome();

    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <Head>
                <title>Elina</title>
            </Head>
            <div className={classes.sliderField}>
                <Slider id="60619e9f3e0b3be6e9e5b4f9" isHomeSlider={true}/>
            </div>
            <div className={classes.body}>
                {width > 1190 ? 
                    <div className={classes.topBannerField}>
                        <div className={classes.leftBannerField}>
                            <Banner
                                id="60642185b0e47f12f2b23a2e"
                                withName={true}
                                mustOverlay={true}
                                seeContent={false}
                            />
                        </div>
                        <div className={classes.rightBannerField}>
                            <div className={classes.rightTopBannerField}>
                                <div className={`${classes.banner} ${classes.firstRightTopBanner}`}>
                                    <Banner
                                        withName={true} 
                                        id="60642137b0e47f12f2b23a2d"
                                        seeContent={false}
                                    />
                                </div>
                            </div>
                            <div className={classes.rightBottomBannerField}>
                                <div className={classes.banner}>
                                    <Banner 
                                        id="60642266b0e47f12f2b23a31" 
                                        classes={{content: classes.contentLeft}}
                                        withName={true}
                                        mustOverlay={true}
                                        seeContent={false}
                                    />
                                </div>
                                <div className={classes.banner}>
                                    <Banner 
                                        id="60642396b0e47f12f2b23a3a" 
                                        classes={{content: classes.contentMiddle}}
                                        withName={true}
                                        mustOverlay={true}
                                        seeContent={false}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={classes.leftBannerField}>
                            <Banner
                                id="60642345b0e47f12f2b23a37"
                                withName={true}
                                mustOverlay={true}
                                seeContent={false}
                            />
                        </div>
                    </div>
                :
                    <BannerCarousel id="60798fa667c43dc9fb51cc90"/>
                }
                <div className={classes.productListTitleField}>
                    <div className={classes.leftLine}></div>
                    <h1 className={classes.productListTitle}>
                        {__("home.new.collection.title")}
                    </h1>
                    <div className={classes.rightLine}></div>
                </div>
                <BannerAndProductList
                    title="ՆՈՐ ՏԵՍԱԿԱՆԻ"
                    link="new"
                    categoryId="603cf3256e6c48e1af5a4fa1"
                    categoryUrlKey="new-collection"
                    perPage={8}
                />
                {width <= 860 ? 
                    <ProductSlider 
                        id="603cf3256e6c48e1af5a4fa1" 
                        type="category"
                        classes={{
                            buttonPrev:classes.buttonPrevNew,
                            buttonNext:classes.buttonNextNew,
                        }}
                        visibleItems={width <= 410 ? 1 : width <= 768 ? 2 : width <= 900 ? 3 : width <= 1080 ? 4 : width <= 1350 ? 5 : 6}
                    />
                :
                    null
                }
                <div className={classes.discountedProductField}>
                    <div className={classes.discountField}>
                    <div className={classes.leftLineDiscount}></div>
                        <h1 className={classes.discountFieldTitle}>
                            {__("home.sales.title")}
                        </h1>
                        <div className={classes.discountLine}></div>
                    </div>
                    <div className={classes.productSlider}>
                        <ProductSlider 
                            id="603cf3346e6c48e1af5a4fa8" 
                            type="category"
                            classes={{
                                buttonPrev:classes.buttonPrev,
                                buttonNext:classes.buttonNext,
                            }}
                            visibleItems={width <= 410 ? 1 : width <= 768 ? 2 : width <= 900 ? 3 : width <= 1080 ? 4 : width <= 1350 ? 5 : 6}
                        />
                    </div>
                </div>
                <HomeFooterBlocks/>
            </div>
        </div>
    );
}

export const loadData = (store, req) => {
    // Fetch page on server
    const homePageId = store.getState().config.scopeConfig.homePageId.value;
    const promises = [];
    if (homePageId) {
        promises.push(store.dispatch(fetchPage(homePageId)));
        promises.push(store.dispatch(fetchBanner("60642185b0e47f12f2b23a2e")));
        promises.push(store.dispatch(fetchBanner("60642137b0e47f12f2b23a2d")));
        promises.push(store.dispatch(fetchBanner("606422dbb0e47f12f2b23a34")));
        promises.push(store.dispatch(fetchBanner("60642266b0e47f12f2b23a31")));
        promises.push(store.dispatch(fetchBanner("606423d3b0e47f12f2b23a3d")));
        promises.push(store.dispatch(fetchBanner("60642396b0e47f12f2b23a3a")));
        promises.push(store.dispatch(fetchBanner("60642345b0e47f12f2b23a37")));
    }
    return Promise.all(promises);
}

export default {
    component: withRouter(Index),
    loadData
};