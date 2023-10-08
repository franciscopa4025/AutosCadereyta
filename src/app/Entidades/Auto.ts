export interface Auto {

  Marca?: string;
  Modelo?: string;
  Año?: number;
  Color?: string;
  Precio?: number;
  Cilindros?: number;
  Kilometraje?: number;
  Transmision?: string;
  EstadoVehiculo?: string;
  Motor?: string;
  Combustible?: string;
  Factura?: string;
  NumeroDeDueños?: number;
  InformacionPapeles?: string;
  FechaRegistro?: Date;
  Caracteristicas: string;
  Descripcion?: string;
  Disponible?: boolean;
  Foto1Url?: File | null;
  Foto2Url?: File | null;
  Foto3Url?: File | null;
  Foto4Url?: File | null;
  Foto5Url?: File | null;
  Foto6Url?: File | null;
  Foto7Url?: File | null;
}
