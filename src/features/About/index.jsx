import { Box, Container, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

AboutFeature.propTypes = {};
const useStyles = makeStyles(() => ({
    root: {
        '& ul': {
            padding: 0,
            listStyleType: 'none',
            '& > li': {
                padding: '4px 0',
            },
        },
    },
}));
function AboutFeature(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root} pt={4}>
            <Container>
                <Paper sx={{ p: 2 }} elevation={0}>
                    <Typography sx={{ pb: 2, fontWeight: 'bold' }} variant="h4">
                        Giới thiệu về Abc Shop
                    </Typography>
                    <Typography>
                        Abc Shop là một hệ sinh thái thương mại tất cả trong một, gồm các công ty
                        thành viên như:
                    </Typography>
                    <ul>
                        <li>
                            - Công ty cổ phần AbC ("AbC Shop") là đơn vị thiết lập, tổ chức sàn
                            thương mại điện tử www.abc shop.vn để các Nhà bán hàng thể tiến hành một
                            phần hoặc toàn bộ quy trình mua bán hàng hóa, dịch vụ trên sàn thương
                            mại điện tử.
                        </li>
                        <li>
                            - Công ty TNHH Abc Shopnow Smart Logistics ("TNSL") là đơn vị cung cấp
                            các dịch vụ logistics đầu-cuối, dịch vụ vận chuyển, dịch vụ bưu chính
                            cho Sàn thương mại điện tử www.abc shop.vn
                        </li>
                        <li>
                            - Công ty TNHH MTV Thương mại AbC ("Abc Shop Trading") là đơn vị bán
                            hàng hóa, dịch vụ trên sàn thương mại điện tử
                        </li>
                        <li>
                            - Đơn vị bán lẻ Abc Shop Trading và Sàn Giao dịch cung cấp 10 triệu sản
                            phẩm từ 26 ngành hàng phục vụ hàng triệu khách hàng trên toàn quốc. Với
                            phương châm hoạt động “Tất cả vì Khách Hàng”, Abc Shop luôn không ngừng
                            nỗ lực nâng cao chất lượng dịch vụ và sản phẩm, từ đó mang đến trải
                            nghiệm mua sắm trọn vẹn cho Khách Hàng Việt Nam với dịch vụ giao hàng
                            nhanh trong 2 tiếng và ngày hôm sau Abc ShopNOW lần đầu tiên tại Đông
                            Nam Á, cùng cam kết cung cấp hàng chính hãng với chính sách hoàn tiền
                            111% nếu phát hiện hàng giả, hàng nhái. Thành lập từ tháng 3/2010, Abc
                            Shop.vn hiện đang là trang thương mại điện tử lọt top 2 tại Việt Nam và
                            top 6 tại khu vực Đông Nam Á. Abc Shop lọt Top 1 nơi làm việc tốt nhất
                            Việt Nam trong ngành Internet/E-commerce 2018 (Anphabe bình chọn), Top
                            50 nơi làm việc tốt nhất châu Á 2019 (HR Asia bình chọn).
                        </li>
                    </ul>
                    <br />
                    <Typography sx={{ fontWeight: 'bold' }} variant="h4">
                        Thông tin về công ty
                    </Typography>
                    <ul>
                        <li>- Công ty Cổ Phần AbC</li>
                        <li>
                            - Địa chỉ đăng ký kinh doanh: 29/1, đường số 4, KP.3, P. Bình Khánh,
                            Q.2, TPHCM, Việt Nam
                        </li>
                        <li>
                            - Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu
                            tư Thành phố Hồ Chí Minh cấp ngày 06/01/2010
                        </li>
                    </ul>
                    <p>
                        Quý khách có nhu cầu liên lạc, trao đổi hoặc đóng góp ý kiến, vui lòng tham
                        khảo các thông tin sau:
                    </p>
                    <ul>
                        <li>- Liên lạc qua điện thoại: 1900 6035</li>
                        <li>- Liên lạc qua email: Truy cập hotro.abc shop.vn</li>
                        <li>- Fanpage của Abc Shop: http://facebook.com/abc shop.vn</li>
                        <li>
                            - Đối tác có nhu cầu hợp tác quảng cáo hoặc kinh doanh: marketing@abc
                            shop.vn
                        </li>
                        <li>
                            - Văn phòng chính: Tòa nhà Viettel, 285 Cách Mạng Tháng 8, Phường 12,
                            Quận 10, Thành phố Hồ Chí Minh.
                        </li>
                        <li>
                            - Văn phòng: 52 Út Tịch, Phường 4, Quận Tân Bình, Thành Phố Hồ Chí Minh.
                        </li>
                    </ul>
                </Paper>
            </Container>
        </Box>
    );
}

export default AboutFeature;
