import React, { FC } from 'react'
import Banner from '../Banner'
import Description from '../Description'
import Heading from '../Heading'
import WavesImage from '../WavesImage'
import Paragraph from '../Paragraph'
import LargeImage from '../LargeImage/LargeImage'
import needs from '../../public/images/needs.png'
import performance from '../../public/images/performance.png'
import interactive from '../../public/images/interactive.png'
import elastic from '../../public/images/elastic.png'
import specificationImage from '../../public/images/specification.png'
import styles from '../Description/Description.module.scss'
import specificationStyles from '../Specification/Specification.module.scss'
import productStyles from './Product.module.scss'
import DataTable from 'components/DataTable'
import Specification from '../Specification/Specification';
import List from 'components/List'

interface ProductProps {
    dataTable: any;
    technicalList: any;
}
const Product: FC<ProductProps> = ({ dataTable, technicalList }) => {
    const dataTableList = dataTable;
    const technicalElements = technicalList;

    return (
        <div className={productStyles.Product}>
            <Banner />
            <Description className={productStyles.ProductDescription__paddingBottom}>
                <WavesImage />
                <Heading level={2} className={styles.Heading}>
                    Pomysłowe technologie dla wszystkich
                </Heading>
                <Paragraph paragraphSize='large'>
                    Lenovo poszerza zakres możliwości w nowych laptopach Yoga opracowanych wspólnie z firmą Intel® i wyposażonych w funkcje sztucznej inteligencji. Teraz możesz mówić do urządzenia i nim sterować z drugiego końca pokoju. Oglądać wideo o podwyższonej jakości w programie Windows Media Player. Unikać zmęczenia oczu dzięki wyświetlaczowi, który automatycznie zmniejsza natężenie światła niebieskiego odpowiednio do pory dnia. A to jeszcze nie wszystko.
                </Paragraph>
                <Heading level={2} className={styles.Heading}>
                    Sztuczna inteligencja i zdrowy rozsądek
                </Heading>
                <Paragraph paragraphSize='large'>
                    Zaawansowany procesor Intel® Core™ 10. generacji do urządzeń mobilnych i utraprzenośny laptop Yoga S740 dostosowują się do Twoich potrzeb i stylu użytkowania. Razem tworzą rozwiązanie bardziej intuicyjne i osobiste, którego sztuczna inteligencja dynamicznie reaguje na Twoje działania i optymalizuje żywotność baterii.
                </Paragraph>
            </Description>
            <Description className={productStyles.ProductDescription__paddingBottom}>
                <LargeImage image={needs} />
                <Heading level={2} className={styles.Heading + ' ' + productStyles.Heading__margin89}>
                    Potrzebujesz czegoś? Wystarczy poprosić.
                </Heading>
                <Paragraph paragraphSize='large'>
                    Yoga S740 ma mikrofony dalekiego zasięgu i inteligentne asystentki głosowe Alexę oraz Cortanę. Pomogą Ci złożyć zamówienie, ustawić przypomnienie czy odtworzyć muzykę — wystarczy poprosić z odległości do 4 metrów. To kolejny przykład przewagi, jaką daje Ci Yoga S740.
                </Paragraph>
                <Paragraph paragraphSize='large'>
                    Aby uzyskać więcej informacji o Cortanie, kliknij <a>tutaj</a> , a w celu uzyskania dodatkowych informacji o Alexie, kliknij <a>tutaj</a>.
                </Paragraph>
                <Heading level={2} className={styles.Heading}>
                    Mobilne kino
                </Heading>
                <Paragraph paragraphSize='large'>
                    Wyświetlacz o przekątnej 14 cali w wąskiej jak brzytwa ramce prezentuje imponującą gamę kolorów i szczegółów. Ekran do poziomu 4K VESA400 HDR z jasnością 500 nitów i spektakularną technologią Dolby Vision™ oraz bogaty, wielowarstwowy dźwięk 3D z głośników z Dolby Atmos® oferują niezwykle realistyczną i wciągającą rozrywkę.
                </Paragraph>
            </Description>
            <Description className={productStyles.ProductDescription__paddingBottom}>
                <LargeImage image={performance} />
                <Heading level={2} className={styles.Heading + ' ' + productStyles.Heading__margin83}>
                    Nie ma gniazdka? Nie ma problemu.
                </Heading>
                <Paragraph paragraphSize='large' className={styles.Paragraph__marginBottom33}>
                    Niezależnie od tego, czy pracujesz w terenie, czy też urządzasz sobie serialową noc na sofie, bateria eleganckiego i smukłego Yoga S740 ma w sobie wystarczająco dużo energii — na nawet 15 godzin działania.
                </Paragraph>
                <Heading level={2} className={styles.Heading + ' ' + styles.Heading__marginTop33}>
                    Nowy poziom wydajności
                </Heading>
                <Paragraph paragraphSize='large'>
                    Opcjonalna dedykowana karta graficzna NVIDIA® GeForce® MX250 zwiększa dodatkowo możliwości laptopa w zastosowaniach służbowych i rozrywkowych. Korzystaj z nawet 3,5-krotnie większej wydajności w porównaniu ze zintegrowaną kartą graficzną w aplikacjach do edycji zdjęć i wideo, a także z szybszej i płynniejszej gry.
                </Paragraph>
            </Description>
            <Description className={productStyles.ProductDescription__paddingBottom76}>
                <LargeImage image={interactive} />
                <Heading level={2} className={styles.Heading + ' ' + productStyles.Heading__margin91}>
                    Intuicyjnie i interaktywnie
                </Heading>
                <Paragraph paragraphSize='large' className={styles.Paragraph__marginBottom24}>
                    Kamera na podczerwień ułatwia życie. Wystarczy, że się oddalisz, a oglądany film zostanie automatycznie wstrzymany. Zawartość wyświetlacza laptopa możesz przenieść na dodatkowy monitor ruchem głowy. A to jeszcze nie wszystko. Laptop Yoga S740 reaguje na Twój styl użytkowania, dlatego możesz skupić się na tym, co ważne.
                </Paragraph>
                <Heading level={2} className={styles.Heading + ' ' + styles.Heading__marginTop0}>
                    Zna Cię lepiej
                </Heading>
                <Paragraph paragraphSize='large'>
                    Możesz na przykład logować się do niego samym uśmiechem. Dzięki kamerze na podczerwień i funkcji rozpoznawania twarzy Windows Hello możesz zacząć pracę trzy razy szybciej niż wpisując hasło. Jest też świetnie zabezpieczony.
                </Paragraph>
            </Description>
            <Description className={productStyles.ProductDescription__paddingBottom82}>
                <LargeImage image={elastic} />
                <Heading level={2} className={styles.Heading + ' ' + productStyles.Heading__marginTop38}>
                    Elegancki styl i mobilność
                </Heading>
                <Paragraph paragraphSize='large' className={styles.Paragraph__marginBottom33}>
                    Yoga S740 ma obudowę z piaskowanego aluminium z wykończeniem wysokiej klasy i łączy w sobie wysoką wydajność z wygodną mobilnością. Ma jedynie 14,9 mm grubości, a waży zaledwie 1,4 kg i jest dostępny w kolorze żelaznoszarym lub z ciepłym, metalicznym mikowym wykończeniem.
                </Paragraph>
                <Heading level={2} className={styles.Heading + ' ' + styles.Heading__marginTop0}>
                    Szybki i elastyczny
                </Heading>
                <Paragraph paragraphSize='large'>
                    Yoga S740 ma port Thunderbolt™ 3. Pod względem szybkości przewyższa on port USB 3.0 aż 8 razy, dlatego stanowi najszybszy i najbardziej uniwersalny sposób łączenia z monitorami, stacjami dokującymi i pamięcią masową. Co więcej, służy też jako źródło zasilania. Laptop ma też szybką łączność Wi-Fi 6, dlatego możesz teraz wyświetlać strumieniowe wideo i przeglądać strony internetowe bez porównania płynniej.
                </Paragraph>
            </Description>
            <Specification>
                <Heading level={2}>
                    Specyfikacja
                </Heading>
                <DataTable specData={dataTableList} />
                <div className={specificationStyles.Specification__explanations}>Dane techniczne mogą zależeć od regionu</div>
            </Specification>
            <Specification className={specificationStyles.last}>
                <Heading level={2} className={productStyles.Heading__marginBottom69}>
                    Specyfikacja
                </Heading>
                <LargeImage image={specificationImage} />
                <List technicalData={technicalElements} />
            </Specification>
        </div>
    )
}

export default Product