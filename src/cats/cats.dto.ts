export class CreateCatDto {
  // @ApiProperty()
  // @IsString()
  // @IsNotEmpty()
  readonly name: string;

  // @ApiProperty()
  // @IsInt()
  // @IsNotEmpty()
  readonly age: number;

  // @ApiProperty()
  // @IsString()
  // @IsNotEmpty()
  readonly breed: string;
}
