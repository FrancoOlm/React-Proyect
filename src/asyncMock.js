const productos =[
    { 
    id: '1',
    nombre: 'NITRO+ RX 570 8G G5',
    precio: 60000,
    img: 'https://cdn.sapphiretech.global/assets/consumer/11266_09_20G_NITRO_RX_570/11265_07_RX580_NITRO_plus_4GB_800x500_01.png',
    stock: 5,
    descripcion: '-Engine Clock: Up to 1340 MHz (Boost)',
    memory:'-Memory: 8GB GDDR5 7000 MHz Effective',
    processors:'-2048 stream processors',
    architecture:'-1080p gaming',
    accelerator:'-Dual-X Cooling NITRO Glow Quick Connect,',
    categoria : 'NITRO' ,
    },

    {
    id: '2',
    nombre: 'NITRO+ AMD Radeon™ RX 6650 XT',
    precio: 124000,
    img: 'https://media.cdn.sapphiretech.com.cn/-/media/sites/sapphire/pim/product-images/11319_01_rx6650xt_nitro_8ggddr6/11319_01_rx6650xt_nitro_8gbgddr6_hdmi_3dp_c01_800x500.ashx?v=d279d308f87645f1889b45bf6806a118',
    stock: 5,
    descripcion: '-GPU: Boost Clock: Up to 2694 MHz',
    memory:'-Memory: 8GB/128 bit DDR6. 17.5 Gbps Effective',
    processors:'-Stream Processors: 2048',
    architecture:'-RDNA™ 2 Architecture',
    accelerator:'-Ray Accelerator: 32',
    categoria : 'NITRO' ,
    },
    {
        id:'3',
        nombre: 'NITRO+ RX 5700 XT 8G GDDR6',
        precio: 98000,
        img: 'https://media.cdn.sapphiretech.com.cn/-/media/sites/sapphire/pim/product-images/11293_03_rx5700xt_nitro/11293_03_rx5700xt_nitro_plus_8gbgddr6_c01_800x500.ashx?v=12c5f0e805e64c5ea2a3c523627e79db',
        stock: 5,
        descripcion: '-GPU: Boost Clock: Up to 2010 MHz',
        memory:'-Memory: 8GB/256 bit GDDR6. 14 Gbps Effective',
        processors:'-Stream Processors: 2560 4K@120Hz',
        architecture:'-Tri-X Cooling Technology',
        categoria : 'NITRO' ,
    },
    {
        id: '4',
        nombre: 'PULSE AMD Radeon™ RX 6700 XT',
        precio: 180000,
        img: 'https://media.cdn.sapphiretech.com.cn/-/media/sites/sapphire/pim/product-images/11306_02_pulse_rx_6700xt/11306_02_rx6700xt_pulse_12gbgddr6_3dp_hdmi_c01_800x500.ashx?v=3ecfffac31e74c29b52603d3e3a08175',
        stock: 5,
        descripcion: '-GPU: Boost Clock: Up to 2581MHz',
        memory:'-Memory: 12GB/192 bit DDR6. 16 Gbps Effective',
        processors:'-Stream Processors: 2560',
        architecture:'-RDNA™ 2 Architecture',
        accelerator:'-Ray Accelerator: 40',
        categoria : 'PULSE' ,
    },
    {
        id: '5',
        nombre: 'PULSE AMD Radeon™ RX 6800',
        precio: '230000' ,
        img: 'https://media.cdn.sapphiretech.com.cn/-/media/sites/sapphire/pim/product-images/11305_02_rx6800_pulse_16ggddr6/11305_02_rx6800_pulse_c01_r_800x500.ashx?v=42ea9980abc141828ee482aa34ae8fb0',
        stock: 5,
        descripcion:'-GPU: Boost Clock: Up to 2170MHz',
        memory : '-Memory:   16GB/256 bit DDR6. 16 Gbps Effective',
        processors:'-Stream Processors: 3840',
        architecture:'-RDNA™ 2 Architecture',
        accelerator:'-Ray Accelerator: 60',
        categoria : 'PULSE',
    },
    {
        id: '6',
        nombre: 'PULSE AMD Radeon™ RX 6500 XT 8GB',
        precio: '85000' ,
        img: 'https://media.cdn.sapphiretech.com.cn/-/media/sites/sapphire/pim/product-images/11314_03_rx6500xt_pulse_8ggddr6/rx6500xt_8gbgddr6_001_800x500_r.ashx?v=c53f35c9874440439f7f3002fabb085d',
        stock: 5,
        descripcion:'-GPU: Boost Clock: Up to 2855MHz',
        memory:    '-Memory: 8GB/64 bit DDR6. 18 Gbps Effective',
        processors: '-Stream Processors: 1024',
        architecture: '-RDNA™ 2 Architecture',
        accelerator: '-Ray Accelerator: 16',
        categoria : 'PULSE' ,
        wallpaper: 'https://media.cdn.sapphiretech.com.cn/-/media/sites/sapphire/components/productimagebanner/nitro-pulse-rx-6000-series/productimagebanner_pulse_rx6500xt_1920x1060_1221.ashx?v=24a054869ff04c84813bb72fe8aacad3'
    }

]

export const getProducts =() =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve (productos)
        },1000)
    })
}

export const getProductsById =(id) =>{
    return new Promise(resolve => {
            setTimeout(() =>{
                resolve(productos.find(prod =>{
                    return prod.id === id
                }))
            },500)
        })
    }

export const getProductsByCategory =(categoryId)=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(productos.filter(prod => prod.categoria == categoryId))
        },500)
        
    })
}